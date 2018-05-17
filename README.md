#### 该脚本根据阿里rap接口管理工具实现自动生成前端请求模板

*  环境： python3, osx or linux, requests包

    * mac安装
         
         1. brew install python3

         2. pip3 install requests

         3. 进入当前脚本目录，执行python3 fetch.py

         4. 需要输入验证码，验证码为同级目录下captcha.svg,使用chrome打开，输入

*  如果想改变请求的模板，可以修改脚本中的template_get, template_postJson, template_postForm

* rap2: rap2中的格式，该项目支持get，post的http请求，以及websocket请求，所有的配置均在编辑接口的描述中定义
    * method: 生成请求的方法名，type：post请求时的content-type(form或者json)，tran: websocket请求

    * get请求：

    ```json
    {
        "method": "getIndex"
    }
    ```

    * post请求：
    ```json
    {
        "method": "postIndex",
        "type": "json" // json or form
    }
    ```

    * websocket
    ```json
    {
        "tran": "ws",
        "method": "getIndexWs"
    }
    ```
* 生成的文件为同级目录下index.js

* 如果你想打包成可执行文件，可以使用pyinstaller -w -F -p . fetch.py