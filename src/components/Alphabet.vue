<template>
    <h2 class="section-title">Arabic Alphabet with Sounds</h2>
    <div class="notes">
        <h3>⚡️ Notes for Learning:</h3>
        <ul>
            <li>Some letters like <strong>ع</strong> and <strong>ق</strong> have no exact English match—practice listening carefully.</li>
            <li>Letters like <strong>ḥ (ح)</strong> and <strong>kh (خ)</strong> might feel unusual at first, but repetition helps.</li>
            <li>Arabic has only <strong>3 vowel sounds</strong> (a, i, u) that can be short or long (ā, ī, ū).</li>
        </ul>
    </div>

    <div class="table-container">
        <table class="alphabet-table">
            <thead>
            <tr>
                <th>#</th>
                <th>Letter</th>
                <th>Name</th>
                <th>Sound (Latin)</th>
                <th>Example</th>
                <th>🔊</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(letter, index) in alphabet" :key="index">
                <td>{{ letter.id }}</td>
                <td class="arabic">{{ letter.letter }}</td>
                <td>{{ letter.name }}</td>
                <td>{{ letter.sound }}</td>
                <td class="example">{{ letter.example }}</td>
                <td><button @click="playAudio(letter.audio)" class="audio-btn">🔊</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const alphabet = [
    { id: 1, letter: "ا", name: "alif", sound: "a (ā)", example: "“a” in father (long ā)" },
    { id: 2, letter: "ب", name: "bāʾ", sound: "b", example: "“b” in bat" },
    { id: 3, letter: "ت", name: "tāʾ", sound: "t", example: "“t” in top" },
    { id: 4, letter: "ث", name: "thāʾ", sound: "th", example: "“th” in think" },
    { id: 5, letter: "ج", name: "jīm", sound: "j", example: "“j” in jam (sometimes “zh”)" },
    { id: 6, letter: "ح", name: "ḥāʾ", sound: "ḥ (deep h)", example: "no exact English sound (like a stronger “h”)" },
    { id: 7, letter: "خ", name: "khāʾ", sound: "kh", example: "like ch in German Bach or Scottish loch" },
    { id: 8, letter: "د", name: "dāl", sound: "d", example: "“d” in dog" },
    { id: 9, letter: "ذ", name: "dhāl", sound: "dh", example: "“th” in this" },
    { id: 10, letter: "ر", name: "rāʾ", sound: "r", example: "rolled/flipped “r”" },
    { id: 11, letter: "ز", name: "zāy", sound: "z", example: "“z” in zoo" },
    { id: 12, letter: "س", name: "sīn", sound: "s", example: "“s” in sun" },
    { id: 13, letter: "ش", name: "shīn", sound: "sh", example: "“sh” in ship" },
    { id: 14, letter: "ص", name: "ṣād", sound: "ṣ (heavy s)", example: "emphatic “s”" },
    { id: 15, letter: "ض", name: "ḍād", sound: "ḍ (heavy d)", example: "emphatic “d”" },
    { id: 16, letter: "ط", name: "ṭāʾ", sound: "ṭ (heavy t)", example: "emphatic “t”" },
    { id: 17, letter: "ظ", name: "ẓāʾ", sound: "ẓ (heavy dh)", example: "emphatic “th” in this" },
    { id: 18, letter: "ع", name: "ʿayn", sound: "ʿ (deep throat)", example: "no English sound (like voiced constriction in throat)" },
    { id: 19, letter: "غ", name: "ghayn", sound: "gh", example: "French r in rouge, or gargled “r”" },
    { id: 20, letter: "ف", name: "fāʾ", sound: "f", example: "“f” in fun" },
    { id: 21, letter: "ق", name: "qāf", sound: "q", example: "deep “k” from throat" },
    { id: 22, letter: "ك", name: "kāf", sound: "k", example: "“k” in kite" },
    { id: 23, letter: "ل", name: "lām", sound: "l", example: "“l” in love" },
    { id: 24, letter: "م", name: "mīm", sound: "m", example: "“m” in man" },
    { id: 25, letter: "ن", name: "nūn", sound: "n", example: "“n” in net" },
    { id: 26, letter: "هـ", name: "hāʾ", sound: "h", example: "“h” in hat" },
    { id: 27, letter: "و", name: "wāw", sound: "w / ū", example: "“w” in we or long oo in food" },
    { id: 28, letter: "ي", name: "yāʾ", sound: "y / ī", example: "“y” in yes or long ee in see" },
];
</script>
