# Compare The Triplets

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

<ul>
<li>If a[i] > b[i], then Alice is awarded 1 point.</li>
<li>If a[i] < b[i], then Bob is awarded 1 point.</li>
<li>If a[i] = b[i], then neither person receives a point.</li>
</ul>
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

<b>Example</b>

a = [1, 2, 3]

b = [3, 2, 1]
<ul>
<li>For elements *0*, Bob is awarded a point because a[0] .</li>
<li>For the equal elements a[1] and b[1], no points are earned.</li>
<li>Finally, for elements 2, a[2] > b[2] so Alice receives a point.</li>
</ul>

The return array is [1, 1] with Alice's score first and Bob's second.

<b>Function Description</b>

Complete the function compareTriplets in the editor below.

compareTriplets has the following parameter(s):

<ul>
<li>int a[3]: Alice's challenge rating</li>
<li>int b[3]: Bob's challenge rating</li>
</ul>

<b>Return</b>
<ul>
<li>int[2]: Alice's score is in the first position, and Bob's score is in the second.</li>
</ul>

<b>Input Format</b>

The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a. <br>
The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

<b>Constraints</b>

<ul>
<li>1 ≤ a[i] ≤ 100</li>
<li>1 ≤ b[i] ≤ 100</li>
</ul>

<b>Sample Input 0</b>

<code>5 6 7</code> <br>
<code>3 6 10</code>

<b>Sample Output 0</b>

<code>1 1</code>

<b>Explanation 0</b>

In this example:

<ul>
<li>a = (a[0], a[1], a[2]) = (5, 6, 7)</li>
<li>b = (b[0], b[1], b[2]) = (3, 6, 10)</li>
</ul>

Now, let's compare each individual score:

<ul>
<li>a[0] > b[0], so Alice receives 1 point.</li>
<li>a[1] = b[1], so nobody receives a point.</li>
<li>a[2] < b[2], so Bob receives 1 point.</li>
</ul>

Alice's comparison score is 1, and Bob's comparison score is 1. Thus, we return the array [1, 1].

<b>Sample Input 1</b>

<code>17 28 30</code> <br>
<code>99 16 8</code>

<b>Sample Output 1</b>

<code>2 1</code>

<b>Explanation 1</b>

Comparing the 0th elements, 17 < 99 so Bob receives a point. <br>
Comparing the 1st and 2nd elements, 28 > 16 and 30 > 8 so Alice receives two points. <br>
The return array is [2, 1].
