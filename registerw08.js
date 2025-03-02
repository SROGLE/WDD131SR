document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;
    const participantsFieldset = document.getElementById('participants');
    const addButton = document.getElementById('addParticipant');
    const registrationForm = document.getElementById('registrationForm');
    const summaryDiv = document.getElementById('summary');

    function participantTemplate(count) {
        return `
            <section class="participant${count}">
                <label for="participantName${count}">Participant Name:</label>
                <input type="text" id="participantName${count}" name="participantName${count}" required><br><br>
                <label for="fee${count}">Fee:</label>
                <input type="number" id="fee${count}" name="fee${count}" required><br><br>
            </section>
        `;
    }

    addButton.addEventListener('click', () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const adultName = document.getElementById('adultName').value;
        const totalFee = totalFees();
        const summaryMessage = successTemplate({
            name: adultName,
            participants: participantCount,
            fee: totalFee
        });
        registrationForm.style.display = 'none';
        summaryDiv.innerHTML = summaryMessage;
        summaryDiv.style.display = 'block';
    });

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((total, element) => total + parseInt(element.value), 0);
    }

    function successTemplate(info) {
        return `
            <p>Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.fee} in Fees.</p>
        `;
    }
});