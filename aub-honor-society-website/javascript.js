fillFAQ();














function fillFAQ() {
    
    const container = document.querySelector("body main #faqs");

    // Fill this array of 2-size arrays with all the FAQ questions and their answers
    let questions = [
        ["How do I join the Honor Society?",
            "You need to apply to early admission and maintain a 3.5 GPA or higher during your time at AUB."
        ],

        ["Test",
            "Test"
        ],
    ];
    for(let i = 0; i<questions.length; i++) {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        const para = document.createElement("p");

        summary.textContent = questions[i][0];
        para.textContent = questions[i][1];

        summary.className="faq-dropdown";
        para.className="faq-full";

        details.appendChild(summary);
        details.appendChild(para);

        container.appendChild(details);

    }

}
