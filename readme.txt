1 js 是动态语言，就是说数据类型，在运行期间确定数据类型，java是静态类型

shell 脚本： 解释一行，运行一行

2, js 函数的返回值，直接return 值就行了，太灵活了

3, config配置的包名与class所属的包名(子包)一致时就不报错了,com.huawei.health.bloodsugar.ResourceTable
ResourceTable是的包名是module包,

java PA服务侧 返回
 Map<String, Object> zsonResult = new HashMap<String, Object>();
                zsonResult.put("code", SUCCESS);
                zsonResult.put("abilityResult", param.getFirstNum() + param.getSecondNum());


 FeatureAbility.callAbility  ACTION_ASYNC   正常返回{"abilityResult":3072,"code":0}   (服务器以这种方式返回MessageParcel writeString)

 FeatureAbility.callAbility  ACTION_SYNC  正常返回{"abilityResult":3072,"code":0} 正常  (服务器以这种方式返回remoteReply.sendRequest)


 // 返回js
                Map<String, Object> result = new HashMap<String, Object>();
                result.put("code", SUCCESS);
                result.put("msg", "gister success");

FeatureAbility.subscribeAbilityEvent  ACTION_ASYNC {"code":0,"msg":"gister success"}(注意不是callback的数据)  正常
订阅的话，一定要设置异步

FeatureAbility.subscribeAbilityEvent  ACTION_SYNC  返回null  不正常哈

一个app 多个 hap 包构成,也就是android多个module模块构成
hap 类型有： entry(应用的主模块), feature(应用的功能模块), 在每个config.json，


