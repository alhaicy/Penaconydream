var storyContent = {"inkVersion":21,"root":[["#","^author: 莲花去国一千年","/#","^匹诺康妮 Tata洛夫号","\n","^无名客「星」的船长办公室","\n",{"->":"part1"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"part1":[["^星穹列车拥有的百分之五的股权足够让你在匹诺康妮走得六亲不认。先前在「白日梦」酒店当经理已经不能满足你，现在你计划举办苏乐达泳池派对。","\n",["ev",{"^->":"part1.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^把这个好点子告诉三月七",{"->":"$r","var":true},null]}],["ev",{"^->":"part1.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^把这个好点子告诉丹恒",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"part1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^拿起手机说干就干。","\n",{"->":"三月七"},{"#f":5}],"c-1":["ev",{"^->":"part1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^丹恒应该喜欢水（苏乐达）","\n",{"->":"丹恒"},{"#f":5}]}],{"#f":1}],"三月七":[[["ev",{"^->":"三月七.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^我计划办一个苏乐达派对，猜猜谁没有被邀请？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"三月七.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^三月七：泡完是不是浑身黏黏的？","\n",{"->":"huida"},{"#f":5}]}],{"#f":1}],"huida":[[["ev",{"^->":"huida.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^不好说",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"huida.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"回答"},{"#f":5}]}],{"#f":1}],"回答":["^三月七：那本姑娘不干。","\n",{"->":"换个人"},{"#f":1}],"换个人":[["ev","str","^问问丹恒","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"换个人吧1"},{"#f":5}]}],{"#f":1}],"丹恒":[[["ev",{"^->":"丹恒.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"丹恒.0.c-0","flg":2},{"s":["^再来分一次海吧！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"丹恒.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"丹恒.0.0.s"},[{"#n":"$r2"}],"\n","^丹恒：？","\n",{"->":"分海"},{"#f":5}]}],{"#f":1}],"分海":[[["ev",{"^->":"分海.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"分海.0.c-0","flg":2},{"s":["^黄金的时刻等你。玫瑰.jpg",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"分海.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"分海.0.0.s"},[{"#n":"$r2"}],"\n",{"->":"zhenhuai"},{"#f":5}]}],{"#f":1}],"zhenhuai":[["^丹恒：不要浪费食物，饮料也算。","\n","ev","str","^问问三月七","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"换个人吧2"},{"#f":5}]}],{"#f":1}],"换个人吧1":[[["ev",{"^->":"换个人吧1.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^再来分一次海吧!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"换个人吧1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^丹恒：？","\n",{"->":"wenhao"},{"#f":5}]}],{"#f":1}],"wenhao":[[["ev",{"^->":"wenhao.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^黄金的时刻等你。玫瑰.jpg",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wenhao.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"meigui"},{"#f":5}]}],{"#f":1}],"meigui":[["^丹恒：不要浪费食物，饮料也算。","\n",["ev",{"^->":"meigui.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^太坏了",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"meigui.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"part2"},{"#f":5}]}],{"#f":1}],"换个人吧2":[[["ev",{"^->":"换个人吧2.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^我计划举办一个苏乐达派对，猜猜谁没有被邀请？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"换个人吧2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"wurenzaiyi"},{"#f":5}]}],{"#f":1}],"wurenzaiyi":[["^三月七：泡完是不是浑身黏黏的？","\n",["ev",{"^->":"wurenzaiyi.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^你可以来试试",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wurenzaiyi.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"shishi"},{"#f":5}]}],{"#f":1}],"shishi":[["^三月七：本姑娘不干。","\n",["ev",{"^->":"shishi.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^太坏了",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"shishi.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"part2"},{"#f":5}]}],{"#f":1}],"part2":[["^虽然没有得到三月七和丹恒的支持，但你还是准备了一份宾客名单。在发出邀请之前，你的手机收到了一条跨星际消息。","\n",["ev",{"^->":"part2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^查看星际短信",{"->":"$r","var":true},null]}],["ev",{"^->":"part2.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^邀请相熟朋友",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"part2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^是霍霍","\n","^霍霍：你在吗？","\n",{"->":"part3"},{"#f":5}],"c-1":["ev",{"^->":"part2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^还有谁的灵魂万里挑一呢？","\n","^思考片刻，你的心里有了人选。","\n",{"->":"开始选择"},{"#f":5}]}],{"#f":1}],"开始选择":[[["ev",{"^->":"开始选择.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^流萤",{"->":"$r","var":true},null]}],["ev",{"^->":"开始选择.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^砂金",{"->":"$r","var":true},null]}],["ev",{"^->":"开始选择.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^真理医生",{"->":"$r","var":true},null]}],["ev",{"^->":"开始选择.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^还是处理短信吧",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"开始选择.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"流萤"},{"#f":5}],"c-1":["ev",{"^->":"开始选择.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"砂金"},{"#f":5}],"c-2":["ev",{"^->":"开始选择.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"真理医生"},{"#f":5}],"c-3":["ev",{"^->":"开始选择.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^这条消息竟然是你远在仙舟罗浮的绿色朋友发来的。","\n",{"->":"太好了"},{"#f":5}]}],{"#f":1}],"太好了":[[["ev",{"^->":"太好了.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^是来参加泳池派对的吗？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"太好了.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"part3"},{"#f":5}]}],{"#f":1}],"part3":[[["ev",{"^->":"part3.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^怎么了藿藿？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"part3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^藿藿：打扰了……真不好意思。尾巴大爷说你或许会愿意帮忙……","\n",{"->":"表达自我"},{"#f":5}]}],{"#f":1}],"表达自我":[[["ev",{"^->":"表达自我.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^我现在对苏乐达泳池派对感兴趣！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"表达自我.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^藿藿：苏乐达？","\n","^藿藿：不、不是","\n","^藿藿：是和之前岁阳逃跑的事有些关系……","\n",{"->":"抓鬼小队"},{"#f":5}]}],{"#f":1}],"抓鬼小队":[[["ev",{"^->":"抓鬼小队.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^灵异事件？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"抓鬼小队.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^藿藿：……应该算是。","\n",{"->":"大事"},{"#f":5}]}],{"#f":1}],"大事":[[["ev",{"^->":"大事.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"大事.0.c-0","flg":2},{"s":["^这么大的事小桂子和裳裳知道了吗？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"大事.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"大事.0.0.s"},[{"#n":"$r2"}],"\n","^藿藿：这件事有些严重……","\n",{"->":"保密"},{"#f":5}]}],{"#f":1}],"保密":[[["ev",{"^->":"保密.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"保密.0.c-0","flg":2},{"s":["^懂了，要保密。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"保密.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"保密.0.0.s"},[{"#n":"$r2"}],"\n","^藿藿：谢谢你理解……我和尾巴大爷在长乐天等你……","\n",{"->":"前往罗浮"},{"#f":5}]}],{"#f":1}],"前往罗浮":[["^你一向乐于助人，藿藿的求助怎么能坐视不理？既然泳池派对找不到志同道合的朋友，那只好暂且搁置了。你收好手机，看向街道一旁的便捷交通工具。","\n",["ev",{"^->":"前往罗浮.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^乘坐气泡弹珠前往「罗浮」",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"前往罗浮.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^只是一眨眼的时间，你就从匹诺康妮来到了罗浮。这里的景物和你上次抵达时没有变化，长生种们的时光太过漫长，百年都是弹指一挥间，何况才短短几个月呢？","\n",{"->":"行动"},{"#f":5}]}],{"#f":1}],"行动":[["^普通旅客要在玉界门接受检查，但你不同。你不仅仅是匹诺康妮的大股东（之一），你还是神策将军景元的贵客，在大人物面前还是能说得上话的，刷脸就能进罗浮。忽然，你远远地看到人流中有位熟悉的少年。","\n",["ev",{"^->":"行动.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"行动.0.c-0","flg":2},{"s":["^彦卿！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"行动.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"行动.0.2.s"},[{"#n":"$r2"}],"\n","^你朝他的方向走了几步。","\n",{"->":"被拦截"},{"#f":5}]}],{"#f":1}],"被拦截":[["^但长刀拦住了你的前进之路","\n","^云骑：请出示你的身份证件。","\n",["ev",{"^->":"被拦截.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^我刷脸。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"被拦截.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"shibai"},{"#f":5}]}],{"#f":1}],"shibai":[["^云骑：我认得您，将军大人的贵客。但请出示身份证件。","\n","^你翻遍了口袋，但遗憾发现由于你助人心切，来得太急，除了手机之外口袋空空。","\n",["ev",{"^->":"shibai.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^既然你认得我，不能通融通融吗？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"shibai.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"buneng"},{"#f":5}]}],{"#f":1}],"buneng":[["^云骑：很遗憾，最近罗浮发生了某些事，上头下达了新要求，我们只是负责执行。","\n","^这时你灵光一闪，想到彦卿，他是将军身边的近卫，由他来证明或许会和你的身份证件一样好用。","\n",["ev",{"^->":"buneng.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^那能让彦卿来分辨我是真是假吗？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"buneng.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^云骑：……谁？","\n",{"->":"huida1"},{"#f":5}]}],{"#f":1}],"huida1":[[["ev",{"^->":"huida1.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^彦卿骁卫。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"huida1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^你指了指远处，但那个少年的身影似乎早淹没在茫茫人海中。云骑和你都没找到他。","\n","^云骑：他不可能出现在这。","\n",{"->":"zhuiwen"},{"#f":5}]}],{"#f":1}],"zhuiwen":[[["ev",{"^->":"zhuiwen.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^为什么?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zhuiwen.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^云骑：……是我多嘴。","\n","^云骑：或许您能够证明自己前来仙舟是有正当理由。","\n","^你想到了和藿藿的聊天记录","\n",{"->":"zhanshi"},{"#f":5}]}],{"#f":1}],"zhanshi":[[["ev",{"^->":"zhanshi.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^展示聊天记录",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zhanshi.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^云骑：十王司的判官……不好意思，耽误您的时间了。仙舟罗浮欢迎您。","\n",{"->":"xingdong"},{"#f":5}]}],{"#f":1}],"xingdong":[["^你恢复了将军贵客的身份，现在比超速星槎还自由一万倍，行动无拘无束。不过对云骑无意中说的那句话有些好奇，但藿藿也正在长乐天对你翘首以盼。现在又是决定行动的时候了！","\n",["ev",{"^->":"xingdong.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^追踪彦卿的行迹",{"->":"$r","var":true},null]}],["ev",{"^->":"xingdong.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^搭乘星槎找藿藿",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"xingdong.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"chufa"},{"#f":5}],"c-1":["ev",{"^->":"xingdong.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"wolaile"},{"#f":5}]}],{"#f":1}],"chufa":[["^很显然，他虽然比上次见面又高了些，但还没有达到鹤立鸡群的地步，在人群里就像一滴水滴在海里，光凭你锐利的眼神还是找不出来。","\n",["ev",{"^->":"chufa.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^使用非常规手段",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"chufa.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"diting"},{"#f":5}]}],{"#f":1}],"diting":[["^太好了，是谛听，你的好奇心有救了！","\n",["ev",{"^->":"diting.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^跟随谛听",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"diting.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"gensui"},{"#f":5}]}],{"#f":1}],"gensui":[["^谛听带着你跑了有段时间，在它莫名其妙打转的同时，你在巷口旁发现了一个熟悉的身影——高挑的身形，萤火虫尾色的裙摆。你悄悄走了过去，试图拍拍她的肩膀。","\n",["ev",{"^->":"gensui.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^你怎么在这？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"gensui.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"zaizhe"},{"#f":5}]}],{"#f":1}],"zaizhe":[["^手还没触及她周身一米内，她立马转过身，表情是难得一见的严肃，见到你后才放松下来。","\n","^流萤：啊，对不起，我以为是敌人。","\n",["ev",{"^->":"zaizhe.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^仙舟治安挺好的。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zaizhe.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"zhian"},{"#f":5}]}],{"#f":1}],"zhian":[["^流萤：嗯……巡逻的云骑是很多。","\n","^你想起来仙舟发布卡芙卡和刃的通缉令，穷观阵审讯结束后不久，仙舟方面撤销了对卡芙卡的通缉，不过刃依旧榜上有名。面前的少女是他的同事之一——可以这么形容吧——或许遇到了相同的麻烦。","\n",["ev",{"^->":"zhian.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^你也被通缉了？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zhian.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^流萤：不，我这次只是作为……游客而来。仙舟的风景和匹诺康妮的各有各的美。","\n",{"->":"zhendema"},{"#f":5}]}],{"#f":1}],"zhendema":[[["ev",{"^->":"zhendema.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^（失落）是我的泳池派对不够吸引人吗？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zhendema.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^流萤：……","\n","^流萤：好吧，我来仙舟是剧本的安排。","\n",{"->":"xunwen"},{"#f":5}]}],{"#f":1}],"xunwen":[[["ev",{"^->":"xunwen.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^好奇你的“戏份”。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"xunwen.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"zhenjing"},{"#f":5}]}],{"#f":1}],"zhenjing":[["^流萤：我需要找到同伴遗体的下落。","\n",["ev",{"^->":"zhenjing.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zhenjing.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"wenhao1"},{"#f":5}]}],{"#f":1}],"wenhao1":[[["ev",{"^->":"wenhao1.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^？？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wenhao1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"wenhao2"},{"#f":5}]}],{"#f":1}],"wenhao2":[[["ev",{"^->":"wenhao2.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^？？？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wenhao2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"wenhao3"},{"#f":5}]}],{"#f":1}],"wenhao3":[[["ev",{"^->":"wenhao3.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^你的同伴死了？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wenhao3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^流萤：死亡对他而言司空见惯，但这次的死亡不同……","\n","^流萤：在艾利欧预见的某个结局中，他还活着，我们正为了抵达这个结局而努力。","\n",{"->":"ren"},{"#f":5}]}],{"#f":1}],"ren":[["^星核猎手中只有一位符合流萤所说，就是那位公司悬赏金额达到八十一亿三千万的刃","\n",["ev",{"^->":"ren.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^但他不是不死之身？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ren.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^流萤：我也很意外……","\n","^流萤：抱歉，没能参加你的……苏乐达泳池派对，等这次任务结束，我一定腾出时间。但现在我得走了，再见。","\n",{"->":"zaijian"},{"#f":5}]}],{"#f":1}],"zaijian":[["^她和你挥手告别，小跑着迈向巷子的另一头，直到漂亮的亮色裙摆消失在尽头。这时你听到清脆的铃铛声——和流萤聊天的这段时间里，你似乎把可怜的藿藿忘了——谛听往这里跑了几步，你把它捞起来。","\n","^辛苦了小谛听。","\n",["ev",{"^->":"zaijian.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^搭乘星槎前往长乐天",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zaijian.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"wolaile"},{"#f":5}]}],{"#f":1}],"wolaile":["^你来过好几回长乐天，一眼就看到狐人少女在一颗树下不安地左右张望。","\n","end",{"#f":1}],"流萤":[["^你抬头看了看天，匹诺康妮的时间和外界不一样，你在奋斗，但别人可能没有。但为了你的苏乐达泳池派对，即使她在睡觉，你也要发出邀请，因为她的心胸和你的一样宽广。","\n",["ev",{"^->":"流萤.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"流萤.0.c-0","flg":2},{"s":["^希望她没有起床气",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"流萤.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"流萤.0.2.s"},[{"#n":"$r2"}],"\n",{"->":"和流萤对话"},{"#f":5}]}],{"#f":1}],"和流萤对话":[[["ev",{"^->":"和流萤对话.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^在吗",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"和流萤对话.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"zaima1"},{"#f":5}]}],{"#f":1}],"zaima1":[[["ev",{"^->":"zaima1.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^在吗",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zaima1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"zaima2"},{"#f":5}]}],{"#f":1}],"zaima2":[[["ev",{"^->":"zaima2.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^在吗",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zaima2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"biaoqingbao"},{"#f":5}]}],{"#f":1}],"biaoqingbao":[[["ev",{"^->":"biaoqingbao.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^发送表情包",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"biaoqingbao.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^星：","#","^IMAGE: 萨姆出击.jpg","/#","\n","^流萤：","#","^IMAGE: 帕姆震惊.jpg","/#","\n","^流萤：出什么事了？","\n",{"->":"paidui"},{"#f":5}]}],{"#f":1}],"paidui":[[["ev",{"^->":"paidui.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^我想举办一个派对",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"paidui.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^流萤：是要邀请我吗？谢谢你，但我最近可能没时间……","\n",{"->":"jixufasong"},{"#f":5}]}],{"#f":1}],"jixufasong":[["#","^IMAGE: 帕姆哭哭.jpg","/#","^流萤：下次我一定来！","\n","^流萤：","#","^IMAGE: 流萤比心.jpg","/#","\n",["ev",{"^->":"jixufasong.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^星核猎手这么忙吗？",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"jixufasong.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"开始选择"},{"#f":5}]}],{"#f":1}],"砂金":[["^在匹诺康妮时你对他的了解增加了不少，同时你也有个刻板印象，即公司高管们大多数时间都很忙。正如托帕所说，她已经过了为金钱工作的阶段。如果砂金也是这样，那该怎么诱惑他来苏乐达派对……不，你可是名震寰宇的无名客，又和他是生死之交，赌徒向来喜欢热闹场面，你一定会获得这位朋友的坚定支持！","\n",["ev",{"^->":"砂金.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"砂金.0.c-0","flg":2},{"s":["^快来加入我吧，朋友！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"砂金.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"砂金.0.2.s"},[{"#n":"$r2"}],"\n",{"->":"发送消息"},{"#f":5}]}],{"#f":1}],"发送消息":[["^砂金：嘿，朋友，真高兴看到你如此有活力，想是近来过得不错。","\n","^砂金：有什么我能帮上忙的？","\n","^砂金：","#","^IMAGE: 砂金cool.jpg","/#","\n","^天哪！听他着友好的语气，你的计划向着成功迈出了微微一步","\n","^ps:微微是40%","\n",["ev",{"^->":"发送消息.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^你向这位热情的朋友陈述了你的苏乐达泳池派对计划",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"发送消息.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"\n",{"->":"得到回复"},{"#f":5}]}],{"#f":1}],"得到回复":[["^砂金：","#","^IMAGE: 砂金撒钱.jpg","/#","\n","^砂金：真是不愧是你的主意！朋友，天才俱乐部怎么没有你的一席之地？","\n","^星：","#","^IMAGE: 呦呦.jpg","/#","\n","^砂金：这个项目我投了。","\n","^砂金：[发起转账]","\n","^砂金：希望能让你玩得开心。","\n","^砂金：我这边还有事情要处理，等你的好消息！","\n","^砂金：","#","^IMAGE:砂金干杯.jpg","/#","\n",["ev",{"^->":"得到回复.0.25.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^别走！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"得到回复.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.25.s"},[{"#n":"$r2"}],"\n",{"->":"误解"},{"#f":5}]}],{"#f":1}],"误解":[["^砂金显然误解了什么，或者是他压根儿不想参加……快住脑！他这样全力以赴地支持你，你不能再用阴暗的想法去揣测他。你看着到账的信用点，心里只剩一个念头。","\n",["ev",{"^->":"误解.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"误解.0.c-0","flg":2},{"s":["^好慷慨的朋友",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"误解.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"误解.0.2.s"},[{"#n":"$r2"}],"\n",{"->":"开始选择"},{"#f":5}]}],{"#f":1}],"真理医生":[["^实际上你编辑好了消息，但有些迟疑。你们上次的聊天还围绕真理大学、辩论赛、对星武器构想的话题上，和这次的苏乐达泳池派对稍显格格不入。","\n",["ev",{"^->":"真理医生.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^添加一点学术说辞",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"真理医生.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"和真理医生的对话"},{"#f":5}]}],{"#f":1}],"和真理医生的对话":[["ev","str","^发送文件","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^关于在soulglad中测试体重对水位上涨影响的研究.docx","\n","^真理医生：内容空白，请检查后发送。","\n",{"->":"wenjian"},{"#f":5}]}],{"#f":1}],"wenjian":[[["ev",{"^->":"wenjian.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^我绞尽脑汁也没写出来。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"wenjian.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"qiuzhu"},{"#f":5}]}],{"#f":1}],"qiuzhu":[[["ev",{"^->":"qiuzhu.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^所以我来请求教授的帮助。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"qiuzhu.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"qiuzhu1"},{"#f":5}]}],{"#f":1}],"qiuzhu1":[[["ev",{"^->":"qiuzhu1.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^发送表情包",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"qiuzhu1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"biaoqingbao1"},{"#f":5}]}],{"#f":1}],"biaoqingbao1":[["^星：","#","^IMAGE: 猴.jpg","/#","\n","^真理医生：那我先问清楚，soulglad是什么？","\n",["ev",{"^->":"biaoqingbao1.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^实话实说",{"->":"$r","var":true},null]}],["ev",{"^->":"biaoqingbao1.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^继续添加学术说辞",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"biaoqingbao1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"真话线"},{"#f":5}],"c-1":["ev",{"^->":"biaoqingbao1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"学术线"},{"#f":5}]}],{"#f":1}],"真话线":[[["ev",{"^->":"真话线.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^苏乐达。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"真话线.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^真理医生：首先，我想有必要和你说明一点：匹诺康妮的环境或多或少会对研究造成影响，对于意志不坚定的人来说，很容易混淆梦境和现实，从而导致实验结果出现可避免的偏差。","\n",{"->":"zhanshishili"},{"#f":5}]}],{"#f":1}],"zhanshishili":[[["ev",{"^->":"zhanshishili.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^我的意志和磐石一样坚定！",{"->":"$r","var":true},null]}],["ev",{"^->":"zhanshishili.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^我的意志和砂金一样坚定！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zhanshishili.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"真理继续说话"},{"#f":5}],"c-1":["ev",{"^->":"zhanshishili.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"真理见鬼"},{"#f":5}]}],{"#f":1}],"真理继续说话":[["^真理医生：看得出来。","\n","^真理医生：其次，你应该知道苏乐达最开始是一种甜味药水，随着时间变化成为了风靡匹诺康妮的饮料。无论是药水还是饮料，都不适合大量——一池子那么多——地投放。","\n",["ev",{"^->":"真理继续说话.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^池子？教授真是太聪明了！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"真理继续说话.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^真理医生：综上两点，你依旧坚持己见？","\n",{"->":"shiliwukepidi"},{"#f":5}]}],{"#f":1}],"shiliwukepidi":[[["ev",{"^->":"shiliwukepidi.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^我的意志和磐石一样坚定！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"shiliwukepidi.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"不通过"},{"#f":5}]}],{"#f":1}],"不通过":[["^真理医生：准备二辩吧。","\n",["ev",{"^->":"不通过.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^我还没说什么呢！",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"不通过.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"开始选择"},{"#f":5}]}],{"#f":1}],"真理见鬼":["^真理医生：见鬼，为什么会提到那个赌徒？","\n",{"->":"真理继续说话"},{"#f":1}],"学术线":[[["ev",{"^->":"学术线.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^是一种饱含二氧化碳和由植物淀粉水解和异构化制备而成的原料再添加一种重要的有机弱酸3-羧基-3-羧基戊二酸等等综合而成的液体。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"学术线.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"jieshi"},{"#f":5}]}],{"#f":1}],"jieshi":[[["ev",{"^->":"jieshi.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^发送表情包",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"jieshi.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^星：","#","^IMAGE: 暗中观察.jpg","/#","\n",{"->":"biaoqingbao2"},{"#f":5}]}],{"#f":1}],"biaoqingbao2":["^真理医生：表达应当简明、连贯、得体，不造成歧义为佳。","\n",{"->":"真话线"},"end",{"#f":1}],"#f":1}],"listDefs":{}};