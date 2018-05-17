import requests
import json
from string import Template
import os

username = ""

password = ""

user_home = os.getenv("HOME")

index_url = "http://rap2.taobao.org/"

# 验证码
captcha_url = "http://rap2api.taobao.org/captcha?t="

# 登录
login_url = "http://rap2.taobao.org/account/login"

# 获取所有的仓库
repo_url = "http://rap2api.taobao.org/repository/joined?user=&name="

# 指定仓库信息
project_url = "http://rap2api.taobao.org/repository/get?id="

# get模板
template_get = """$method(params = "") {return base.get("$url", params)}\n"""

# postForm模板
template_post_form = """$method(params = "") {return base.postForm("$url", params)}\n"""

# postJson模板
template_post_json = """$method(params = "") {return base.postJson("$url", params)}\n"""

# -------------------------------- function ----------------------------


def check_key_file():
    key_file_path = os.path.join(user_home, ".fetch.json")
    if not os.path.exists(key_file_path):
        os.system(r'touch %s' % key_file_path)
        with open(key_file_path, 'w+') as f:
            print("请输入你的用户名：")
            username = input()
            print("请输入你的密码：")
            password = input()
            print("用户名密码会保存在$HOME下的.fetch.json中，可前往更改")
            t = {'username': username, 'password': password}
            t_str = json.dumps(t)
            f.write(t_str)
    else:
        with open(key_file_path, 'r') as f_r:
            f_read = f_r.read()
            if f_read is not None and f_read is not '':
                f_read_json = json.loads(f_read)
                username = f_read_json['username']
                password = f_read_json['password']
    print("用户%s即将开始登录" % username)
    return username, password

# 递归判断输入错误重试


def input_project_id():
    project_id = input()
    if project_id in project_list_str:
        return project_id
    else:
        print("该项目不存在！请重新输入:")
        return input_project_id()

# properties request 生成注释 {tpye: '', name: '', des: ''} request和response生成注释


def genereate_comment(comm_list):
    comment_tag_request = "\n\n//request:\n"
    comment_tag_response = "//response:\n"
    comment_head = "//{\n"
    comment_tail = "//}\n"
    comm_res_request = ''
    comm_res_response = ''
    for comm in comm_list:
        if comm['scope'] == "request":
            property_res_request = property_comment(comm)
            comm_res_request = comm_res_request + property_res_request
        elif comm['scope'] == 'response':
            property_res_response = property_comment(comm)
            comm_res_response = comm_res_response + property_res_response

    return comment_tag_request + comment_head + comm_res_request + comment_tail + comment_tag_response + comment_head + comm_res_response + comment_tail

# 拼接properties


def property_comment(comm):
    if comm['type'] == "Number":
        s = """//\t$name : 0 // $des\n"""
    elif comm['type'] == "String":
        s = """//\t$name : '' // $des\n"""
    else:
        s = ""
    s_tpl = Template(s)
    des = ''
    if comm['description'] is not None:
        des = comm['description'].replace("\n", "")
    return s_tpl.substitute(name=comm['name'], des=des)


# 生成请求方法
def generate_request_method(inf, url):
    des = inf["description"]
    method_name = ''
    res = ''
    des = json.loads(des)
    if des is None or des is "" or des['method'] == None:
        print("----------------------------<%s> 接口中描述填写不正确,请检查后重新运行脚本----------------------------", url)
        os._exit(1)
    else:
        method_name = des['method']
        if 'tran' in des and des['tran'] == 'ws':
            # 这里处理websocket请求
            pass
        else:
            if inf['method'] == "GET":
                res = Template(template_get).substitute(
                    method=des['method'], url=url)
            if inf['method'] == "POST":
                if des['type'] == 'form':
                    res = Template(template_post_form).substitute(
                        method=des['method'], url=url)
                elif des['type'] == 'json':
                    res = Template(template_post_json).substitute(
                        method=des['method'], url=url)
                else:
                    print(
                        '----------------------------error:<%s>中content-type类型未定义,请检查后重新运行脚本----------------------------' % url)
                    os._exit(1)
    return res

# 如果当前的代码中有更新，会不动当前的代码，如果没有更新就会替换掉，基于方法的检测。


# ----------------------------------逻辑 ----------------------------------
captcha_req = requests.get(captcha_url)

index_req = requests.get(index_url)

username, password = check_key_file()

# 处理验证码和获取cookie
with open('captcha.svg', 'wb') as file:
    file.write(captcha_req.content)
print("请输入你的验证码：")
captcha = input()
cookies = {c.name: c.value for c in captcha_req.cookies}
headers = {
    'Host': 'rap2api.taobao.org',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36',
    'Connection': 'Keep-Alive'
}

login_req = requests.post(login_url, {'email': username,
                                      'password': password, 'captcha': captcha}, cookies=cookies, headers=headers)
repo_info_json = {}

try:
    repo_info_json = requests.get(repo_url, cookies=cookies).json()
except Exception:
    print("----------------------------error:验证码错误，请重新运行当前脚本!!!----------------------------")
    os._exit(1)
project_list = []

# 获取项目
print("\n----------------------------属于你的所有项目----------------------------\n")
for repo in repo_info_json['data']:
    project_list.append(repo['id'])
    print(" * [%s] %s" % (repo['id'], repo['name']))

# 输入项目id
print("\n请输入你想导入的项目id：")
project_id = ""
project_list_str = [str(x) for x in project_list]
project_id = input_project_id()

# 获取该id的项目
project_req = requests.get(project_url + project_id, cookies=cookies)

# 该项目的模块
mods = project_req.json()['data']['modules']

# 所有的模块
final_res = """"""
for mod in mods:
    for inf in mod['interfaces']:
        request_res = generate_request_method(inf, inf['url'])
        comment_res = genereate_comment(inf['properties'])
        agg_res = comment_res + request_res
        final_res = final_res + agg_res
with open('index.js', 'w') as f:
    f.write(final_res)

print("\n----------------------------生成项目成功----------------------------")
