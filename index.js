

//request:
//{
//	ping : 0 // 
//}
//response:
//{
//	data : 0 // ping数据透传
//	errcode : '' // 
//	errmsg : '' // 
//}
ping(params = "") { return base.get("/api/v1/ping", params) }


//request:
//{
//}
//response:
//{
//	data : 0 // 当前服务器系统UTC毫秒时间
//	errcode : '' // 错误码
//	errmsg : '' // 错误信息
//}
getTimestamp(params = "") { return base.get("api/v1/timestamp", params) }


//request:
//{
//}
//response:
//{
//	errcode : '' // 响应状态
//	baseCurrency : '' // 基础币种
//	targetCurrency : '' // 计价币种
//	pricePrecision : 0 // 价格精确位数
//	amountPrecision : 0 // 数量精确位数
//	symbolPartition : '' // 交易区
//	timestamp : '' // 响应时间
//	errmsg : '' // 响应信息
//	status : '' // PRE_ACTIVE, ACTIVE,POST_ACTIVE,FOBBID;
//	orderTypes : '' // LIMIT,MARKET,STOP_LOSS,STOP_LOSS_LIMIT,TAKE_PROFIT,TAKE_PROFIT_LIMIT,LIMIT_MAKER
//	filterType : '' // BUY_PRICE_FILTER, SELL_PRICE_FILTER, BUY_LOT_SIZE,SELL_LOT_SIZE
//	minPrice : '' // 
//	maxPrice : '' // 
//	tickSize : '' // 
//	minQty : '' // 
//	maxQty : '' // 
//	stepSize : '' // 
//}
getSymbols(params = "") { return base.get("api/v1/symbols", params) }


//request:
//{
//}
//response:
//{
//	errcode : '' // 响应状态
//	timestamp : '' // 响应时间
//	errmsg : '' // 响应信息
//}
getCurrencys(params = "") { return base.get("api/v1/currencys", params) }


//request:
//{
//	symbol : '' // 交易对，必填
//	period : '' // K线步骤，必填，1min, 5min, 15min, 30min, 1hour, 4hour, 1day, 5day, 1week, 1mon
//	limit : 0 // K线长度，【1，2000】
//	startTime : 0 // 
//	endTime : 0 // 与开始时间如果都传，则使用，任何一个不传则不考虑时间条件
//}
//response:
//{
//	errcode : '' // 响应状态
//	timestamp : 0 // 响应时刻UTC毫秒数
//	errmsg : '' // 响应信息
//}
getMarketKlineHistory(params = "") { return base.postForm("/market/kline/history", params) }


//request:
//{
//	symbol : '' // 交易对
//	type : 0 // 合并深度，【0-5】
//	limit : 0 // 获取长度，【1-500】
//}
//response:
//{
//	errcode : '' // 响应状态
//	timestamp : 0 // 响应时间，UTC毫秒
//	timestamp : 0 // 井深数据生成时间
//	price : 0 // 价格
//	amount : 0 // 数量
//	price : 0 // 价格
//	amount : 0 // 数量
//	errmsg : '' // 响应信息
//}
getMarketDepth(params = "") { return base.postJson("/market/depth", params) }


//request:
//{
//	symbol : '' // 交易对
//	limit : 0 // 获取交易记录的数量，【1，500】
//}
//response:
//{
//	errcode : '' // 响应状态
//	timestamp : 0 // 响应时间
//	id : 0 // 交易id
//	price : 0 // 交易价格
//	count : 0 // 交易数量
//	direction : '' // 主动成交方向
//	time : 0 // 交易时间
//	errmsg : '' // 响应信息
//}
getMarketTradeHistory(params = "") { return base.get("/market/trade/history", params) }


//request:
//{
//	symbol : '' // 交易对
//}
//response:
//{
//	errcode : '' // 响应状态
//	timestamp : 0 // 响应时间，UTC毫秒
//	lastPrice : 0 // 最新价格
//	startPrice : 0 //  前推24小时成交价
//	highestPrice : 0 // 近24小时最高价
//	lowestPrice : 0 // 近24小时最低价
//	totalAmount : 0 // 近24小时累积成交额, 即 sum(每一笔成交价 * 该笔的成交量)
//	openTime : 0 // 开始UTC时间，毫秒
//	closeTime : 0 // 结束UTC时间，毫秒
//	firstId : 0 // 近24H第一笔交易id
//	lastId : 0 // 近24H最后一笔交易id
//	totalCount : 0 // 近24小时累积成交数
//	timestamp : 0 // 数据统计时间
//	errmsg : '' // 响应信息
//	rose : '' // 
//	rose7 : '' // 
//	lastRmbPrice : 0 // 
//	lastUsdPrice : 0 // 
//}
getDetail(params = "") { return base.get("/market/24hr/detail", params) }


//request:
//{
//	symbol : '' // 交易对
//}
//response:
//{
//	errcode : '' // 响应状态
//	liang : 0 // 成交量
//	count : 0 // 成交笔数
//	open : 0 // 开盘价
//	close : 0 // 收盘价,当K线为最晚的一根时，是最新成交价
//	low : 0 // 最低价
//	high : 0 // 最高价
//	amount : 0 // 成交额, 即 sum(每一笔成交价 * 该笔的成交量)
//	timestamp : '' // 响应时间
//	errmsg : '' // 响应信息
//}
getMarketKlineMerged(params = "") { return base.get("/market/kline/merged", params) }


//request:
//{
//}
//response:
//{
//	errcode : '' // 
//	errmsg : '' // 
//	timestamp : '' // 
//	symbol : '' // USDTBTC
//	price : '' // 
//}
getMarketTickerAllPrices(params = "") { return base.get("/market/ticker/allPrices", params) }


//request:
//{
//}
//response:
//{
//	bar : '' // 数组元素示例
//	errcode : '' // 响应状态
//	timestamp : 0 // 响应时间
//	accountId : 0 // 账户id
//	accountType : '' // 账户类型
//	status : 0 // 账户状态
//	errmsg : '' // 响应信息
//}
getAccountList(params = "") { return base.postJson("/api/v1/account/list", params) }


//request:
//{
//	accountId : 0 // 账户id，请求url中
//}
//response:
//{
//	errcode : '' // 响应状态
//	timestamp : 0 // 响应时间
//	currency : '' // 币种
//	balance : '' // 余额
//	frozenBalance : '' // 冻结金额
//	errmsg : '' // 响应信息
//}
getAccountDetail(params = "") { return base.postJson("/api/v1/account/{accountId}/detail", params) }


//request:
//{
//	address : '' // 提现地址
//	amount : '' // 提币数量
//	currency : '' // 提取币种
//	fee : '' // 转账手续费
//	addressTag : '' // 虚拟币共享地址tag，XRP特有
//}
//response:
//{
//	errcode : '' // 响应状态
//	data : '' // 提现id
//	timestamp : '' // 响应时间
//	errmsg : '' // 响应信息
//}
doWithdraw(params = "") { return base.postJson("/api/v1/withdraw", params) }


//request:
//{
//	withdrawId : '' // 取现id，填到url中
//}
//response:
//{
//	errcode : '' // 响应状态
//	timestamp : '' // 响应时间
//	errmsg : '' // 响应信息
//}
doWithDrawCancel(params = "") { return base.postJson("/api/v1/withdraw/{withdrawId}/cancel", params) }


//request:
//{
//	currency : '' // 币种
//	type : '' // 类型，recharge充值，withdraw提现
//	startTime : '' // 起始时间，yyyyMMdd
//	endTime : '' // 结束时间
//	pageNum : '' // 可选，页码，默认为1
//	pageSize : '' // 可选，页大小，默认为10
//}
//response:
//{
//	errcode : '' // 响应状态
//	id : 0 // 充提id
//	type : '' // 类型
//	currency : '' // 币种
//	txHash : '' // 交易哈希
//	amount : 0 // 地址
//	address : '' // 地址
//	addressTag : '' // 地址标签
//	fee : 0 // 手续费
//	status : '' // 状态
//	createTime : 0 // 发起时间
//	lastUpdateTime : 0 // 最新更新时间
//	timestamp : '' // 响应时间
//	errmsg : '' // 响应信息
//}
doRwList(params = "") { return base.postJson("/api/v1/rw/list", params) }


//request:
//{
//	accountId : 0 // 下单账户id
//	amount : '' // 限价单表示下单数量，市价买单时表示买多少钱，市价卖单时表示卖多少币
//	symbol : '' // 交易对,例如: USDTETH
//	type : '' // 订单类型，buy-market：市价买, sell-market：市价卖, buy-limit：限价买, sell-limit：限价卖
//	price : '' // 下单价格，市价单不传该参数
//}
//response:
//{
//	errcode : '' // 响应状态
//	data : 0 // 订单id
//	timestamp : '' // 响应时间
//	errmsg : '' // 响应信息
//}
doOrderPush(params = "") { return base.postJson("/api/v1/order/push", params) }


//request:
//{
//	orderId : 0 // 取消订单，url传输
//}
//response:
//{
//	errcode : '' // 响应状态
//	timestamp : 0 // 取消时间
//	errmsg : '' // 响应信息
//}
doOrderCancel(params = "") { return base.postJson("/api/v1/order/{orderId}/cancel", params) }


//request:
//{
//	orderIdList : '' // 1,2,3, 以逗号分隔；单次取消不超过100,
//}
//response:
//{
//	errcode : '' // 响应状态
//	timestamp : 0 // 响应时间
//	errmsg : '' // 响应信息
//}
doOrderBatchCancel(params = "") { return base.postJson("/api/v1/order/cancel", params) }


//request:
//{
//	orderId : 0 // 订单id，填在url中
//}
//response:
//{
//	accountId : 0 // 订单所属账户
//	count : '' // 订单交易数量
//	successCount : '' // 成功交易数量
//	successAmount : '' // 成功交易金额
//	fee : '' // 成交手续费（买入为计价币种，卖出为基础币种）
//	id : '' // 订单id
//	price : '' // 订单价格
//	symbol : '' // 订单交易对
//	type : '' // 订单类型（buy-market：市价买, sell-market：市价卖, buy-limit：限价买, sell-limit：限价卖）
//	source : '' // 订单来源；APP:app端下单；WEB：web端；OPENAPI：通过调用api下单
//	status : '' // 订单状态
//	createTime : 0 // 订单创建时间
//	lastUpdateTime : 0 // 最后更新时间
//	errcode : '' // 响应状态
//	matcherId : '' // 戳合记录id
//	price : '' // 成交价格
//	count : '' // 成交数量
//	fee : '' // 交易手续费
//	createTime : 0 // 戳合时间
//	timestamp : '' // 响应时间
//	errmsg : '' // 响应信息
//}
doOrderDetail(params = "") { return base.postJson("/api/v1/order/{orderId}/detail", params) }


//request:
//{
//	symbol : '' // 交易对
//	types : '' // 交易类型，多个逗号分隔 ; BUY-LIMIT:限价买；SELL-LIMIT：限价卖
//	status : '' // 状态，多个逗号分隔;Going 未成交PartDeal 部分成交AllDeal 完全成交Cancel 用户撤销Cancelling 待撤销
//	startTime : '' // 开始时间，yyyyMMdd
//	endTime : '' // 结束时间，yyyyMMdd
//	pageSize : 0 // 查询数量
//	pageNum : 0 // 查询页数，1...
//}
//response:
//{
//	errcode : '' // 响应状态
//	accountId : 0 // 所属账户
//	count : '' // 委托数量
//	successCount : '' // 成功交易数量
//	successAmount : '' // 成功交易金额
//	fee : '' // 成交手续费
//	id : '' // 订单id
//	price : '' // 订单价格
//	symbol : '' // 交易对
//	type : '' // 交易类型
//	source : '' // 订单来源
//	status : '' // 订单状态
//	createTime : 0 // 创建时间
//	lastUpdateTime : 0 // 最新更新时间
//	timestamp : '' // 响应时间
//	errmsg : '' // 响应信息
//}
doOrderList(params = "") { return base.postJson("/api/v1/order/list", params) }


//request:
//{
//	ping : 0 // 当前时间
//}
//response:
//{
//	pong : 0 // ping信息透传
//}


//request:
//{
//	sub : '' // 订阅渠道 (1)、market.$symbol.kline.$period.$limit 	$symbol：交易对，必填 例如：USDT_ETH $period：K线步骤，必填，1min, 5min, 15min, 30min, 1hour, 4hour, 1day, 5day, 1week, 1mon $limit: K线长度，【1，2000】(2)、market.$symbol.depth.$type.$limit 		$type:合并深度，【0-5】 $limit: 获取长度，【1-500】(3)、market.$symbol.trade.detail.$limit 	$limit: 获取长度，【1-500】(4)、market.$symbol.detail (5)、market.$symbol.kline.latest.$limit  	$limit: K线长度，【1，2000】
//	id : '' // id generate by client
//}
//response:
//{
//	id : '' // 
//	subbed : '' // 订阅失败 此项为空
//	timestamp : 0 // 
//	errcode : '' // 
//	errmsg : '' // 
//}


//request:
//{
//}
//response:
//{
//	channel : '' // 
//	timestamp : 0 // 
//	data : '' // 
//}


//request:
//{
//	req : '' // market.$symbol.kline.$period.$limit $symbol：交易对，必填 例如：USDT_ETH $period：K线步骤，必填，1min, 5min, 15min, 30min, 1hour, 4hour, 1day, 5day, 1week, 1mon $limit: K线长度，【1，2000】 
//	id : '' // 
//}
//response:
//{
//	id : '' // 
//	rep : '' // 
//	timestamp : 0 // 
//	errcode : '' // 
//	errmsg : '' // 
//	data : '' // 
//}


//request:
//{
//}
//response:
//{
//	timestamp : 0 // 
//	channel : '' // 
//	timestamp : 0 // 
//	sequence : '' // 
//	price : 0 // 
//	amount : 0 // 
//	price : 0 // 
//	amount : 0 // 
//}


//request:
//{
//	req : '' // market.$symbol.depth.$type.$limit $symbol：交易对，必填 例如：USDT_ETH  $type:合并深度，【0-5】 $limit: 获取长度，【1-500】 
//	id : '' // 
//}
//response:
//{
//	id : '' // 
//	rep : '' // 
//	errcode : '' // 
//	errmsg : '' // 
//	timestamp : 0 // 
//	sequence : '' // 
//	timestamp : 0 // 
//	price : 0 // 
//	amount : 0 // 
//	price : 0 // 
//	amount : 0 // 
//}


//request:
//{
//}
//response:
//{
//	price : 0 // 
//	channel : '' // 
//	timestamp : 0 // 
//	id : 0 // 
//	price : 0 // 
//	count : 0 // 
//	direction : '' // 
//	time : 0 // 
//}


//request:
//{
//	req : '' // market.$symbol.trade.detail.$limit $symbol：交易对，必填 例如：USDT_ETH  $limit: 获取长度，【1-500】 
//	id : '' // 
//}
//response:
//{
//	price : 0 // 
//	id : '' // 
//	rep : '' // 
//	errcode : '' // 
//	errmsg : '' // 
//	timestamp : 0 // 
//	id : 0 // 
//	price : 0 // 
//	count : 0 // 
//	direction : '' // 
//	time : 0 // 
//}


//request:
//{
//	req : '' // market.$symbol.detail  $symbol：交易对，必填 例如：USDT_ETH
//	id : '' // 
//}
//response:
//{
//	id : '' // 
//	rep : '' // 
//	errcode : '' // 
//	errmsg : '' // 
//	timestamp : 0 // 
//	lastPrice : 0 // 
//	startPrice : 0 // 
//	highestPrice : 0 // 
//	lowestPrice : 0 // 
//	totalAmount : 0 // 
//	openTime : 0 // 
//	closeTime : 0 // 
//	firstId : 0 // 
//	lastId : 0 // 
//	totalCount : 0 // 
//	timestamp : 0 // 
//	rose : '' // 
//	rose7 : '' // 
//	lastRmbPrice : 0 // 
//	lastUsdPrice : 0 // 
//}


//request:
//{
//	unsub : '' // 取消订阅渠道 (1)、unsubscribe.market.$symbol.kline.$period.$limit   $symbol：交易对，必填 例如：USDT_ETH $period：K线步骤，必填，1min, 5min, 15min, 30min, 1hour, 4hour, 1day, 5day, 1week, 1mon (2)、unsubscribe.market.$symbol.depth.$type.$limit     $type:合并深度，【0-5】 (3)、unsubscribe.market.$symbol.trade.detail.$limit (4)、unsubscribe.market.$symbol.detail(5)、unsubscribe.market.$symbol.kline.latest.$limit 
//	id : '' // 
//}
//response:
//{
//	id : '' // 
//	unsub : '' // 退订失败 此项为空
//	timestamp : 0 // 
//	errcode : '' // 
//	errmsg : '' // 
//}


//request:
//{
//}
//response:
//{
//	channel : '' // 
//	timestamp : 0 // 
//	lastPrice : 0 // 
//	startPrice : 0 // 
//	highestPrice : 0 // 
//	lowestPrice : 0 // 
//	totalAmount : 0 // 
//	openTime : 0 // 
//	closeTime : 0 // 
//	firstId : 0 // 
//	lastId : 0 // 
//	totalCount : 0 // 
//	timestamp : 0 // 
//	rose : '' // 
//	rose7 : '' // 
//	lastRmbPrice : 0 // 
//	lastUsdPrice : 0 // 
//}


//request:
//{
//	req : '' // 
//	id : '' // 
//}
//response:
//{
//	id : '' // 
//	rep : '' // 
//	timestamp : 0 // 
//	errcode : '' // 
//	errmsg : '' // 
//	data : '' // 
//}


//request:
//{
//}
//response:
//{
//	channel : '' // 
//	timestamp : 0 // 
//	data : '' // 
//}
