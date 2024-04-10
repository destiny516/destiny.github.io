##### java虚拟机——JVM
2. JVM 是一个虚拟的计算机，具有指令集并使用不同的存储区域。负责执行指令，管理数据、内存、寄存器，包含在JDK 中。
3. 对于不同的平台，有不同的虚拟机。
4. Java 虚拟机机制屏蔽了底层运行平台的差别，实现了“一次编译，到处运行”。

![[Pasted image 20240130182006.png]]

### JDK 基本介绍

1. JDK 的全称(Java Development Kit Java 开发工具包) JDK = JRE + java 的开发工具java, javac,javadoc,javap 等
2. JDK 是提供给Java 开发人员使用的，其中包含了java 的开发工具，也包括了JRE。

### [](https://github.com/timerring/backend-tutorial/blob/main/java-tutorial/ch02_java_overview.md#jre-%E5%9F%BA%E6%9C%AC%E4%BB%8B%E7%BB%8D)JRE 基本介绍

1. JRE(Java Runtime Environment Java 运行环境) JRE = JVM + Java 的核心类库[类]
2. 包括Java 虚拟机(JVM Java Virtual Machine)和Java 程序所需的核心类库等，如果想要运行一个开发好的Java 程序，计算机中只需要安装JRE 即可。

### [](https://github.com/timerring/backend-tutorial/blob/main/java-tutorial/ch02_java_overview.md#jdkjre-%E5%92%8Cjvm-%E7%9A%84%E5%8C%85%E5%90%AB%E5%85%B3%E7%B3%BB)JDK、JRE 和JVM 的包含关系

1. JDK = JRE + 开发工具集（例如Javac,java 编译工具等)
2. JRE = JVM + Java SE 标准类库（java 核心类库）
3. 如果只想运行开发好的.class 文件只需要JRE