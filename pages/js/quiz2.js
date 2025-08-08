function submitQuiz2() {
    const answers = {
        q1: "النيل",
        q2: "أفريقيا",
        q3: "البحر المتوسط"
    };

    let score = 0;
    let total = 3;
    let resultText = "";

    for (let i = 1; i <= total; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer) {
            if (userAnswer.value === answers[`q${i}`]) {
                score++;
                resultText += `سؤال ${i}: إجابة صحيحة<br>`;
            } else {
                resultText += `سؤال ${i}: إجابة خاطئة (الإجابة الصحيحة: ${answers[`q${i}`]})<br>`;
            }
        } else {
            resultText += `سؤال ${i}: لم يتم اختيار إجابة (الإجابة الصحيحة: ${answers[`q${i}`]})<br>`;
        }
    }

    let percentage = (score / total) * 100;
    document.getElementById("result").innerHTML =
        `<h3>درجتك: ${score}/${total} (${percentage}%)</h3><p>${resultText}</p>`;

    localStorage.setItem("lesson2_score", percentage);
    localStorage.setItem("lesson2_done", "true");
    localStorage.setItem("lesson2_answers", JSON.stringify({
        q1: document.querySelector('input[name="q1"]:checked')?.value || "",
        q2: document.querySelector('input[name="q2"]:checked')?.value || "",
        q3: document.querySelector('input[name="q3"]:checked')?.value || ""
    }));
}