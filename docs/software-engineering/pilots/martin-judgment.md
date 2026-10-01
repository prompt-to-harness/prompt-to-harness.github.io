# 拾遗卡：Robert Martin，一个好名字能替读者做多少事

## 预计时长

内部试讲样稿，12--15 分钟。人物和开场 3 分钟、两行代码的争论 4 分钟、命名实验 4 分钟、历史回望与收束 2--4 分钟。可以独立讲；与 Ousterhout 卡连讲时，共用的报告例子只运行一次。

## 开场

今天从两行赋值开始。把它们包进一个叫 `clearTotals()` 的函数，究竟让代码更好读，还是多了一次跳转？两位写软件设计书的人，看着同样的代码，答案相反。

我们先站到 Robert Martin 这一边，看看他为什么觉得一个名字值得存在。先别急着用“短函数教条”解释他。

## 人物与背景

Martin 在与 Ousterhout 的对谈中回忆，1999 年他和 Kent Beck 为了学习 TDD，一起写了一个叫 *Sparkle* 的 Swing 小程序。他惊讶于其中很多函数只有两到四行，因为这类界面程序通常有很长的方法。[讨论原文，Method Length](https://github.com/johnousterhout/aposd-vs-clean-code/blob/2ce0742228fbf850e15101f83308de2cd72144b2/README.md#method-length)

后来这段经验进入了 *Clean Code*。在 2024--2025 年的讨论里，他又解释，2008 年写书时想纠正的是常见的大函数习惯。他承认书里没有充分讨论如何判断拆分过头，但仍然倾向于先尝试分解，再在不合适时内联回来。[同上；这是 Martin 对自己经历的回述]

因此，这个故事里有一个具体的人、一段有效经验，以及经验被写成强烈建议后的争议。Martin 强调最需要帮助的是后来阅读代码的人，方法名应该让他们先读懂意图，再按需要进入细节。[讨论原文，Introductions](https://github.com/johnousterhout/aposd-vs-clean-code/blob/2ce0742228fbf850e15101f83308de2cd72144b2/README.md#introductions)

## 一个很小的争论

下面两个片段来自双方书面对谈。暂时遮住作者名字，让听众先选择并说明原因：

```java
public String makeStatement() {
    clearTotals();
    return makeHeader() + makeRentalDetails() + makeFooter();
}
```

与：

```java
public String makeStatement() {
    amountOwed = 0;
    totalPoints = 0;
    return makeHeader() + makeRentalDetails() + makeFooter();
}
```

Martin 支持第一种：`clearTotals` 把两个赋值提升成一个概念，初始化。读者可以在“清空、生成表头、生成明细、生成表尾”的层次上阅读。值得注意的是，他在前文明确反对把两个赋值分别抽成 `clearAmountOwed()` 和 `clearTotalPoints()`，因为那样的名字没有增加有意义的抽象。

Ousterhout 支持第二种：两个赋值已经足够明显，拆分没有让他少理解什么。他还追问，两项初始化究竟有怎样的关系，才能算“一件事”？[讨论原文，Method Length 中的 `clearTotals`]

这里有真实分歧。Martin 更愿意相信有意义的名字能组织阅读；Ousterhout 更要求接口带来明确的信息隐藏收益。两人的目标接近，对这个具体提取的价值却没有达成一致。

## 代码实验

回到 [报告例子](learning-report.mjs)。这次先不数跳转次数，请听众给 `header`、`footer`、`row`、`line` 各写一句评价：这个名字让我可以暂时不读哪些实现？如果答案是“什么也没有”，才继续讨论删掉它。

再增加一条教学用规则：“只有已完成、且至少学习 30 分钟的资料才计入有效学习进度。”下面两种表达都可以拿来讨论：

```js
const eligibleItems = items.filter(item => item.completed && item.minutes >= 30);
```

```js
function countsTowardProgress(item) {
  return item.completed && item.minutes >= 30;
}

const eligibleItems = items.filter(countsTowardProgress);
```

这是课堂扩展，尚未放进配套脚本。让听众在一次调用的情形下判断，再补上第二个情形：“首页进度也必须使用同一条有效学习规则。”名字现在是否更有价值？至少用一条未完成的资料、已完成的 29 分钟资料和已完成的 30 分钟资料核对规则。

讲师参考：第二种表达能命名一条业务规则，并为共享同一规则提供位置。第一种在唯一使用点也可能足够清楚。名字不会让所有读者免读实现；规则维护者仍然需要知道阈值。若另一张报表只是碰巧也使用 30 分钟，将来由不同需求驱动，就不能仅凭代码相同强行共用。

## 往前追一层：责任来自谁

2014 年，Martin 在解释单一职责原则（SRP）的文章里，把思路追溯到 Parnas 的模块分解、Dijkstra 的分离关注点，以及早期的内聚和耦合讨论。他用同一个 `Employee` 类里的工资计算、工时报告和数据库存储作例子：它们都与员工有关，却响应不同业务职能的变化。[Martin：The Single Responsibility Principle](https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html)

原文有一句很短的话：“This principle is about people.” 此处的“人”指提出同一类业务变化的人或群体，并非每换一个同事就换一个模块。

这能帮助我们判断上一段的规则该不该共享。模块的 SRP 和函数的 “One Thing” 是相关但不同的问题，不能用“每个函数只能有一个动作”概括两者。

## 带走的思想

读规则时，同时带上作者面对的问题。一个好名字可以把读者带到合适的抽象层；同一业务规则有明确归属，也能减少遗漏修改。判断其价值，要看它让谁更容易完成哪一种阅读或变更任务。

## AI 时代的映射

这是我们的当代映射：Agent 可以快速生成很多好听的名字，名字是否对应稳定的业务概念仍需核对。试讲时可用这个请求：

> 首页和报告采用同一条有效学习规则。请找出规则的归属，让两个调用者表达各自意图；保留边界行为证据，并解释哪些拆分值得保留。

收尾可以这样说：以后再看到“函数要短”，顺着它问下去：这个名字替谁解释了什么？这些代码为什么应该一起变化？规则才开始成为判断工具。

## 讲师备注

主要史料为上方固定版本书面对谈与 2014 年 SRP 原文。[Martin 2000 年的 Design Principles and Design Patterns](https://www.objectmentor.com/resources/articles/Principles_and_Patterns.pdf) 可作延伸阅读，从设计为什么变难修改讲起。视频只作补充观看；未取得逐字稿，不把这些文字引述标成视频台词。

试讲成功的信号是听众能为一个值得保留的短函数辩护，也能解释自己何时会内联它。与 Ousterhout 卡合用时，两种判断都应被认真呈现；尚未用真实学员验证效果。
