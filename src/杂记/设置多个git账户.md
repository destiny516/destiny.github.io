# 设置多个git账户.md

>使用场景：在多个平台（GitHub，gitee，gitlab等）有项目，需要设置多个账户
>需要清楚，我们在第一次设置的name，email，一般设置的时全局的（global），这两个参数只是作为git操作人的标识，在git平台中是没有实际意义的（既与git平台的登录账号没有关系，暂时是这么认为的。）它除了可以设置全局还可以设置本地（local）。全局或本地的配置信息都在文件config（无后缀名）中。
### 1、删除git全局配置
```
查看全局或局部的用户名和邮箱
git config --global user.name
git config --global user.email

git config --global --list
--global 可以换成--local
```
将他们删除
```
git config --global --unset user.name "你的名字"
git config --global --unset user.email "你的邮箱"
```
### 2、生成新的SSH keys
使用cmd或Git Bash Here（鼠标右键打开）
```
ssh-keygen -t rsa -C "自己git账号的邮箱"
```

PS C:\Users\ma> ssh-keygen -t rsa -C "destiny0402@163.com"
Generating public/private rsa key pair.
Enter file in which to save the key (C:\\Users\\你电脑的名字/.ssh/id_rsa):（//可以在这里设置你想保存的地址，id_rsa建议重命名成又标识的）
Created directory 'C:\\Users\\你电脑的名字/.ssh'.
Enter passphrase (empty for no passphrase):（设置密码，enter跳过）
Enter same passphrase again:（确定密码，enter跳过）
Your identification has been saved in C:\Users你电脑的名字/.ssh/id_rsa.
Your public key has been saved in C:\Users\你电脑的名字/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:（生成的SHA256 可以与git平台上配置ssh公钥的SHA256进行对比。）

进入指定目录（默认是C:\\Users\\你电脑的名字/.ssh/id_rsa），查看生成的两个文件id_rsa和id_rsa.pub
### 3、将公钥配置到代码管理平台
>每个管理平台配置都差不多，在设置-ssh公钥中，粘贴id_rsa.pub中的内容

### 4、创建config文件
>注意1：没有后缀，可以先创建config.txt，编辑完之后把后缀删掉
>注意2：最好用EditPlus等编辑工具打开，避免出编码问题
>注意3：尽量手敲，如果直接复制，注意删除一下前后空格。（下面有示例）
```
Host 任意主机别名1，后面会用到,建议gitee.com
    HostName gitee.com
    IdentityFile ~/.ssh/自己的ssh key的文件1
    PreferredAuthentications publickey
    User git平台账号用户名
    
Host 任意主机别名2，后面会用到，建议github.com
    HostName github.com
    IdentityFile ~/.ssh/自己的ssh key的文件2
    PreferredAuthentications publickey
    User git平台账号用户名
```

~~配置文件中的 HostName 是远程仓库的访问地址，这里可以是 IP，也可以是域名。Host 是用来拉取的仓库的别名，配不配置都行。如果 HostName 没配置的话，那就必须把 Host 配置为仓库 IP 地址或者域名，而非别名。~~

### 5、测试是否成功
```
ssh -T git@github.com
```
### 6、第一次使用
clone项目时，复制ssh的链接
```
git@github.com:XXXX/test.git
```
其中的github.com改成配置文件中的Host，所以在设置config时建议将Host设置成域名。（正常应该时不需要这么麻烦的，但是根据上面删除线的提示我没有成功。）

