* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Microsoft JhengHei", Arial, sans-serif;
  background: linear-gradient(135deg, #1d1238, #3b1f73, #5d3fd3);
  color: #ffffff;
  min-height: 100vh;
}

.container {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
}

.hero {
  text-align: center;
  margin-bottom: 30px;
}

.hero h1 {
  font-size: 2.6rem;
  margin-bottom: 12px;
}

.hero p {
  font-size: 1.1rem;
  color: #e6dcff;
}

.card {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
}

.controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

button {
  border: none;
  padding: 14px 24px;
  font-size: 1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.25s ease;
  font-weight: bold;
}

#fortuneBtn {
  background: #ffd166;
  color: #2c1a4d;
}

#fortuneBtn:hover {
  transform: translateY(-2px);
  background: #ffdd85;
}

#resetBtn {
  background: #ffffff;
  color: #472a7a;
}

#resetBtn:hover {
  transform: translateY(-2px);
  background: #f2ecff;
}

.result {
  margin-top: 20px;
}

.hidden {
  display: none;
}

#fortuneTitle {
  text-align: center;
  margin-bottom: 20px;
  color: #fff3b0;
}

.fortune-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.fortune-box,
.summary-box,
.ending-box {
  background: rgba(255, 255, 255, 0.14);
  border-radius: 16px;
  padding: 20px;
}

.fortune-box h3,
.summary-box h3,
.ending-box h3 {
  margin-bottom: 10px;
  color: #ffe9a8;
}

.fortune-box p,
.summary-box p,
.ending-box p {
  line-height: 1.8;
  color: #f7f2ff;
}

footer {
  text-align: center;
  margin-top: 25px;
  color: #ddd3ff;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .fortune-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .card {
    padding: 20px;
  }
}
