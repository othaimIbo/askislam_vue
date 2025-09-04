<template>
    <div class="arabic-learning-container">
        <!-- Sidebar Navigation -->
        <aside class="sidenav">
            <h2 class="sidenav-title">Arabic Learning</h2>
            <nav>
                <a href="#intro">Intro</a>
                <a href="#alphabet">Alphabet</a>
                <a href="#harakat">Harakāt</a>
                <a href="#exercises">Exercises</a>
                <a href="#practice">Practice</a>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="main-content-wrapper">
            <main class="main-content">
                <!-- Section 1: Introduction -->
                <section id="intro" class="section intro">
                    <h1>Learn the Arabic Alphabet</h1>
                    <p>Welcome! This page helps you learn the basics of Arabic letters and vowel marks. Listen, repeat, and practice each sound to get started.</p>
                </section>

                <!-- Section 2: Alphabet Chart -->
                <section id="alphabet" class="section chart-wrapper">
                    <Alphabet />
                </section>

                <!-- Section 3: Harakāt -->
                <section id="harakat" class="section chart-wrapper">
                    <h2 class="section-title">Harakāt (Diacritics)</h2>
                    <p>Harakāt represent short vowels and pronunciation guides in Arabic.</p>
                    <div class="grid-container">
                        <div v-for="haraka in harakat" :key="haraka.name" class="haraka-card">
                            <div class="haraka-symbol">{{ haraka.symbol }}</div>
                            <div class="haraka-name">{{ haraka.name }}</div>
                            <div class="haraka-example">{{ haraka.example }}</div>
                            <button @click="playAudio(haraka.audio)" class="audio-btn">🔊</button>
                        </div>
                    </div>
                </section>

                <!-- Section 4: Interactive Exercises -->
                <section id="exercises" class="section">
                    <h2 class="section-title">Interactive Exercises</h2>

                    <div class="exercise-card">
                        <h3>Flashcards</h3>
                        <div class="flashcard">{{ flashcard.character }}</div>
                        <div v-if="showFlashcardInfo">
                            <p>{{ flashcard.name }} — {{ flashcard.pronunciation }}</p>
                            <button @click="playAudio(flashcard.audio)" class="audio-btn">🔊</button>
                        </div>
                        <button @click="flipFlashcard" class="flip-btn">{{ showFlashcardInfo ? 'Next' : 'Flip' }}</button>
                    </div>

                    <div class="exercise-card">
                        <h3>Match the Sound</h3>
                        <p>Listen to the sound and click the correct letter:</p>
                        <button @click="playAudio(matchAudio)" class="play-sound-btn">Play 🔊</button>
                        <div class="grid-container">
                            <button v-for="letter in alphabet" :key="letter.name" @click="checkMatch(letter)" class="letter-btn">
                                {{ letter.letter }}
                            </button>
                        </div>
                        <p class="feedback">{{ matchFeedback }}</p>
                    </div>

                    <div class="exercise-card">
                        <h3>Fill in the Haraka</h3>
                        <p>Select the correct harakāt for the word:</p>
                        <div class="flashcard">{{ harakaWord.masked }}</div>
                        <div class="grid-container">
                            <button v-for="haraka in harakat" :key="haraka.name" @click="fillHaraka(haraka)" class="letter-btn">
                                {{ haraka.symbol }}
                            </button>
                        </div>
                        <p class="feedback">{{ harakaFeedback }}</p>
                    </div>

                    <div class="exercise-card">
                        <h3>Letter Form Recognition</h3>
                        <p>Identify the letter form in the word:</p>
                        <div class="flashcard">{{ formWord.word }}</div>
                        <div class="grid-container">
                            <button v-for="letter in formWord.options" :key="letter" @click="checkForm(letter)" class="letter-btn">
                                {{ letter }}
                            </button>
                        </div>
                        <p class="feedback">{{ formFeedback }}</p>
                    </div>

                    <div class="exercise-card">
                        <h3>Typing Practice</h3>
                        <input type="text" v-model="typedInput" class="typing-input" placeholder="Type here..." />
                        <div class="grid-container">
                            <button v-for="key in arabicKeys" :key="key" @click="typedInput += key" class="letter-btn">
                                {{ key }}
                            </button>
                        </div>
                    </div>
                </section>

                <!-- Section 5: Practice & Review -->
                <section id="practice" class="section chart-wrapper">
                    <h2 class="section-title">Practice & Review</h2>
                    <div class="grid-container practice-grid">
                        <div v-for="item in practiceItems" :key="item.word" class="practice-card">
                            <div class="flashcard">{{ item.word }}</div>
                            <button @click="playAudio(item.audio)" class="audio-btn">🔊</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Alphabet from "../components/Alphabet.vue";

const alphabet = [
    { id: 1, letter: "ا", name: "alif", sound: "a (ā)", example: "“a” in father (long ā)", audio: "/audio/alif.mp3" },
    { id: 2, letter: "ب", name: "bāʾ", sound: "b", example: "“b” in bat", audio: "/audio/ba.mp3" },
    { id: 3, letter: "ت", name: "tāʾ", sound: "t", example: "“t” in top", audio: "/audio/ta.mp3" }
];

const harakat = [
    { symbol: "َ", name: "Fatha", example: "بَ", audio: "/audio/fatha.mp3" },
    { symbol: "ِ", name: "Kasra", example: "بِ", audio: "/audio/kasra.mp3" },
    { symbol: "ُ", name: "Damma", example: "بُ", audio: "/audio/damma.mp3" }
];

const showFlashcardInfo = ref(false);
const flashcard = ref(alphabet[0]);
function flipFlashcard() {
    showFlashcardInfo.value = !showFlashcardInfo.value;
    if (!showFlashcardInfo.value) {
        const nextIndex = (alphabet.indexOf(flashcard.value) + 1) % alphabet.length;
        flashcard.value = alphabet[nextIndex];
    }
}

const matchAudio = "/audio/sample.mp3";
const matchFeedback = ref("");
function checkMatch(letter) { matchFeedback.value = letter.letter === "ا" ? "Correct!" : "Try again!"; }

const harakaWord = ref({ masked: "ب_ت" });
const harakaFeedback = ref("");
function fillHaraka(haraka) { harakaFeedback.value = haraka.symbol === "َ" ? "Correct!" : "Try again!"; }

const formWord = ref({ word: "بيت", options: ["ب", "ت"], correct: "ب" });
const formFeedback = ref("");
function checkForm(letter) { formFeedback.value = letter === formWord.value.correct ? "Correct!" : "Try again!"; }

const typedInput = ref("");
const arabicKeys = ["ا","ب","ت","ث","ج","ح","خ"];

const practiceItems = [
    { word: "باب", audio: "/audio/bab.mp3" },
    { word: "بيت", audio: "/audio/beit.mp3" }
];

function playAudio(src) {
    const audio = new Audio(src);
    audio.play();
}
</script>

<style >
/* Container: no bg color */
.arabic-learning-container {
    display: flex;
    gap: 1rem;
    min-height: 600px;
}

/* Sidebar: static, vertical items, colored bg */
.sidenav {
    flex: 0 0 180px;
    background: #0dab1f;
    color: #fff;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    height: auto; /* doesn't scroll */
}
.sidenav-title {
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 1rem;
}
.sidenav nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.sidenav a {
    color: #fff;
    text-decoration: none;
    padding: 0.25rem 0;
    font-weight: 600;
}
.sidenav a:hover { color: #ffd700; }

/* Main Content: scrollable, bg, centered */
.main-content-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    overflow-y: auto;
}
.main-content {
    width: 100%;
    max-width: 900px;
    background: #f0f4f8;
    padding: 2rem;
    border-radius: 10px;
}

/* Sections, tables, flashcards etc remain same as previous styles */
.section { margin-bottom: 3rem; }
.section-title { font-size: 1.8rem; font-weight: bold; margin-bottom: 1rem; color: #222; }
h1 { font-size: 2rem; font-weight: bold; margin-bottom: 1rem; }

.table-container { overflow-x: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); margin-bottom: 2rem; }
.alphabet-table { width: 100%; border-collapse: collapse; background: white; text-align: center; }
.alphabet-table th, .alphabet-table td { padding: 12px 16px; border-bottom: 1px solid #ddd; }
.alphabet-table th { background: #f7f9fc; font-weight: bold; }
.alphabet-table tbody tr:nth-child(even) { background: #fafafa; }
.alphabet-table tbody tr:hover { background: #eef6ff; }
.arabic { font-family: "Amiri", serif; font-size: 1.5rem; font-weight: bold; }
.example { font-style: italic; color: #555; }

/* Notes */
.notes { margin: 2rem 0; padding: 1.5rem; background: #fffbea; border-left: 5px solid #facc15; border-radius: 6px; }
.notes h3 { margin-bottom: 0.8rem; font-size: 1.2rem; font-weight: bold; }
.notes ul { padding-left: 1.2rem; }
.notes li { margin-bottom: 0.5rem; line-height: 1.5; }

/* Grid Layouts */
.grid-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 1rem; margin-top: 1rem; }
.haraka-card, .exercise-card, .practice-card { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; background: #f9fafb; text-align: center; }
.haraka-symbol { font-size: 3rem; font-weight: bold; margin-bottom: 0.5rem; }
.haraka-name { font-weight: 600; margin-bottom: 0.25rem; }
.haraka-example { font-size: 3rem; font-style: italic; color: #555; margin-bottom: 0.5rem; }

/* Flashcards & Buttons */
.flashcard { font-size: 2rem; font-family: "Amiri", serif; margin: 0.5rem 0; }
.audio-btn, .flip-btn, .play-sound-btn, .letter-btn { padding: 0.5rem 1rem; border: none; border-radius: 5px; background: #0dab1f; color: #fff; cursor: pointer; transition: 0.2s; }
.audio-btn:hover, .flip-btn:hover, .play-sound-btn:hover, .letter-btn:hover { background: #0b8319; }
.feedback { margin-top: 0.5rem; font-weight: bold; color: #0dab1f; }

/* Typing Input */
.typing-input { width: 100%; padding: 0.5rem; border-radius: 6px; border: 1px solid #ccc; margin-bottom: 0.5rem; }

/* Practice Grid */
.practice-grid { grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; }
</style>
