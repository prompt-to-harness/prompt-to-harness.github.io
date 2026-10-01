# 拾遗卡：John Ousterhout，函数变短，为什么可能更难读

## 预计时长

内部试讲样稿，12--15 分钟。适合放在一个 Project 已经能运行、准备第一次扩展功能时。史料和开场 3 分钟、代码对照 4 分钟、改需求 4 分钟、讨论与收束 2--4 分钟。

## 开场

你让 AI 整理一个函数。它交回来六个函数，每个名字都挺工整，测试也通过了。第二天，你想确认空列表会输出什么，却要连续打开好几个函数。代码被整理过了，你的理解工作减少了吗？

先把这个问题留着。今天请来的作者是 John Ousterhout，*A Philosophy of Software Design* 的作者。他关心的是：下周接手代码的人，为了完成一个任务，需要同时掌握多少信息？

## 故事

2024 年 9 月到 2025 年 2 月，他和 Robert Martin 围绕 *Clean Code* 展开了一系列讨论。两位写软件设计书的人，把争论落在了一个很小的 Java 素数生成器 `PrimeGenerator` 上。[讨论原文，Method Length](https://github.com/johnousterhout/aposd-vs-clean-code/blob/2ce0742228fbf850e15101f83308de2cd72144b2/README.md#method-length)

里面的方法已经很短。Ousterhout 仍然不满意：有些方法需要读者追到其他方法，再把共享状态和副作用拼起来，才能知道它到底在干什么。Martin 则认为，有意义的名字能帮助读者逐层理解，拆分值得优先尝试。

Ousterhout 给出的判断标准是：“The best methods are those that provide a lot of functionality but have a very simple interface.” 简单说，一个接口应该让使用者用较少的知识，获得较多的能力。[同上]

这里引出两个词就够了：**接口**是使用一个模块必须知道的约定；**实现**是模块内部如何完成工作。接口相对简单、能隐藏较多实现复杂度，称为深模块；接口带来的理解成本接近它所隐藏的内容，就趋于浅。参数少不等于接口简单，调用顺序、状态限制和错误条件也算使用者必须知道的信息。

他把复杂度称为让系统难以理解和修改的因素，信息数量与信息是否明显是其中的重要部分。深度也不是代码行数之比。[讨论原文，Introductions](https://github.com/johnousterhout/aposd-vs-clean-code/blob/2ce0742228fbf850e15101f83308de2cd72144b2/README.md#introductions)

## 代码实验

下面是我们为课堂写的缩小例子，不是两位作者的代码。先让听众独立读 A、B，再运行 [配套脚本](learning-report.mjs) 检查四组输入下的输出是否一致。运行结果只检查行为，不验证可读性：

```js
// A：用多个辅助函数分解报告生成
function reportA(items) {
  return header(items) + rows(items) + footer(items);
}

function header(items) {
  return `Reading report (${items.length} items)\n`;
}

function rows(items) {
  return items.length === 0 ? "" : `${items.map(row).join("\n")}\n`;
}

function row(item) {
  return line(item.title, item.minutes);
}

function line(title, minutes) {
  return `${title}: ${minutes} min`;
}

function footer(items) {
  const total = items.reduce((sum, item) => sum + item.minutes, 0);
  return `Total: ${total} min`;
}
```

```js
// B：将报告生成的局部过程放在一起
function reportB(items) {
  const total = items.reduce((sum, item) => sum + item.minutes, 0);
  const lines = items.map(item => `${item.title}: ${item.minutes} min`);
  return [`Reading report (${items.length} items)`, ...lines,
    `Total: ${total} min`].join("\n");
}
```

A 的 `header`、`rows`、`footer` 给出了报告的结构，这些名字有导航价值。与此同时，`row` 到 `line` 的转发隐藏了多少知识，值得追问。换行也散落在 `header` 和 `rows` 中；确认空列表格式时，读者需要把两者拼起来。B 在一处用 `join` 处理换行，比较容易核对这个具体问题。

**必须讲清的边界**：`reportA(items)` 和 `reportB(items)` 对外提供同样的能力和约定。这个例子展示的是内部辅助函数的收益与成本，不能证明 B 的公共接口更深，更不能证明所有短函数都应合并。这里的辅助函数也没有共享可变状态，不要把原始素数例子的风险直接套到它们身上。

现场做三步：

1. 找出空列表输出和总时长的计算位置，记下自己必须读哪些函数，以及名字让自己省略了哪些细节。
2. 接到需求“只展示已完成资料，标题数量和总分钟数也只算已完成资料”。数据已经有 `completed`，从调用入口统一过滤一次，再分别交给 A、B。示例数据应变成 2 项、80 分钟；脚本已有这组对照。
3. 对比 diff。两种写法都可能只改一处，这也是有效发现。如果有人分别在表头、明细、合计中加过滤，讨论同一规则为何出现了三个维护位置。

留下一条 Review 评论即可：指出一个值得保留的名字、一个收益不足的转发，再说明什么需求变化会让自己改判。

## 带走的思想

把“拆小”改成三个问题：

- 这个接口是否隐藏了实现知识？
- 调用者是否获得了比接口复杂度更多的能力？
- 拆分后，相关信息是在一起，还是被迫散落到多次跳转中？

这就是 deep/shallow 的用途：帮助我们讨论复杂度放在哪里。它不是方法长度的 lint 规则，也不提供一个脱离上下文的最佳行数。

## AI 时代的映射

这是我们的当代映射：如果只要求 Agent “每个函数不超过若干行”，它可能交付更多短函数，却没有减少阅读任务。可以把重构请求写具体：

> 保持报告格式不变。检查空列表和总时长需要跨哪些函数理解。说明拟新增或删除的辅助函数隐藏了什么知识，再做有依据的修改；允许保留现状。

收尾可以这样说：代码拆完之后，复杂度不会自动消失。它可能被接口隐藏，也可能只是搬到了读者脑子里。下一次 Review，问一问调用者少需要知道了什么。

## 讲师备注

本卡依据上方固定版本的作者对谈；[作者书页](https://web.stanford.edu/~ouster/cgi-bin/book.php) 可作延伸阅读。这是现代争论入口，下一次可以沿信息隐藏追到 Parnas 的 1972 年论文。

试讲成功的信号是听众能指出一个具体的信息负担，并承认反例；只记住“短函数不好”说明这张卡需要重讲。尚未进行真实学员试讲，不能把这里的预期写成教学效果结论。
