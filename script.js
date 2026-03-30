const allButton = document.getElementById('all-btn');
const openButton = document.getElementById('open-btn');
const closedButton = document.getElementById('closed-btn');

const issueCountBox = document.getElementById('issue-count-box');

const cardContainer = document.getElementById('card-container');


// ======== buttons =========
const toggleButton = (id) => {
    if (id == 'all-btn') {
        allButton.classList.remove('btn-active');
        openButton.classList.remove('btn-active');
        closedButton.classList.remove('btn-active');

        allButton.classList.add('btn-active');

        cardContainer.innerHTML = '';
        loadAllIssue();
    }
    else if (id == 'open-btn') {
        allButton.classList.remove('btn-active');
        openButton.classList.remove('btn-active');
        closedButton.classList.remove('btn-active');

        openButton.classList.add('btn-active');

        cardContainer.innerHTML = '';
        loadOpenIssue();
    }
    else if (id == 'closed-btn') {
        allButton.classList.remove('btn-active');
        openButton.classList.remove('btn-active');
        closedButton.classList.remove('btn-active');

        closedButton.classList.add('btn-active');

        cardContainer.innerHTML = '';
        loadClosedIssue();
    }
}


// ======== Displaying all issues =========
const loadAllIssue = () => {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';

    fetch(url)
        .then(res => res.json())
        .then(get => displayAllIssue(get.data))
}

const displayAllIssue = (issues) => {
    for (let issue of issues) {

        issueCountBox.innerText = issues.length + ' Issues';

        const card = document.createElement('div');
        if (issue.status == 'open') {

            card.innerHTML = `
            <div onclick="my_modal_1.showModal()" class="card bg-white rounded-md border-t-4 border-green-400 h-full">
                <div class="p-4">
                    <div class="flex justify-between mb-3">
                        <img src="icons/Open-Status.png" alt="">
                        <p class="${issue.priority == 'high' ? 'bg-red-200 text-red-600' : issue.priority == 'medium' ? 'bg-yellow-200 text-yellow-600' : 'bg-green-200 text-green-600'} px-4 rounded-xl uppercase">${issue.priority}</p>
                    </div>
                    <h3 class="font-semibold text-purple-950">${issue.title}</h3>
                    <p class="text-gray-400 font-light text-[0.8rem] mt-1.5 mb-1.5">${issue.description}</p>
                    <div class="flex gap-1.5 mt-2">
                        <p class="${issue.labels[0] == 'enhancement' ? 'bg-green-200 text-green-500 border-green-500' : issue.labels[0] == 'documentation' ? 'bg-gray-200 text-gray-500 border-gray-500' : 'bg-red-200 text-red-500 border-red-500'} text-[0.7rem] py-1 px-3 rounded-2xl border">${issue.labels[0] == 'bug' ? '<i class="fa-solid fa-bug"></i> ' : issue.labels[0] == 'documentation' ? '<i class="fa-regular fa-clipboard"></i> ' : '<i class="fa-solid fa-code"></i> '} ${issue.labels[0]}</p>
                        <p class="${issue.labels[1] == 'enhancement' ? 'bg-green-200 text-green-500 border-green-500': issue.labels[1] == 'good first issue' ? 'bg-purple-200 text-purple-500 border-purple-500': issue.labels[1] == 'help wanted' ? 'bg-red-600 text-red-200 border-red-600' : 'bg-amber-100 text-amber-500 border-amber-500'} text-[0.7rem] py-1 px-3 rounded-2xl border"><i class="fa-solid fa-life-ring"></i> ${issue.labels[1]}</p>
                    </div>
                </div>
                <hr class="border-gray-300">
                <div class="p-4">
                    <p class="text-[0.9rem] text-gray-600">#${issue.id} by ${issue.author}</p>
                    <p class="text-[0.9rem] text-gray-600">${issue.createdAt}</p>
                </div>
            </div>
        `;
        } else if (issue.status == 'closed') {
            card.innerHTML = `
            <div onclick="my_modal_1.showModal()" class="card bg-white rounded-md border-t-4 border-purple-700 h-full">
                <div class="p-4">
                    <div class="flex justify-between mb-3">
                        <img src="icons/Closed- Status.png" alt="">
                        <p class="${issue.priority == 'high' ? 'bg-red-200 text-red-600' : issue.priority == 'medium' ? 'bg-yellow-200 text-yellow-600' : 'bg-green-200 text-green-600'} px-4 rounded-xl uppercase">${issue.priority}</p>
                    </div>
                    <h3 class="font-semibold text-purple-950">${issue.title}</h3>
                    <p class="text-gray-400 font-light text-[0.8rem] mt-1.5 mb-1.5">${issue.description}</p>
                    <div class="flex gap-1.5 mt-2">
                        <p class="${issue.labels[0] == 'enhancement' ? 'bg-green-200 text-green-500 border-green-500' : issue.labels[0] == 'documentation' ? 'bg-gray-200 text-gray-500 border-gray-500' : 'bg-red-200 text-red-500 border-red-500'} text-[0.7rem] py-1 px-3 rounded-2xl border">${issue.labels[0] == 'bug' ? '<i class="fa-solid fa-bug"></i> ' : issue.labels[0] == 'documentation' ? '<i class="fa-regular fa-clipboard"></i> ' : '<i class="fa-solid fa-code"></i> '} ${issue.labels[0]}</p>
                        <p class="${issue.labels[1] == 'enhancement' ? 'bg-green-200 text-green-500 border-green-500': issue.labels[1] == 'good first issue' ? 'bg-purple-200 text-purple-500 border-purple-500': issue.labels[1] == 'help wanted' ? 'bg-red-600 text-red-200 border-red-600' : 'bg-amber-100 text-amber-500 border-amber-500'} text-[0.7rem] py-1 px-3 rounded-2xl border"><i class="fa-solid fa-life-ring"></i> ${issue.labels[1]}</p>
                    </div>
                </div>
                <hr class="border-gray-300">
                <div class="p-4">
                    <p class="text-[0.9rem] text-gray-600">#${issue.id} by ${issue.author}</p>
                    <p class="text-[0.9rem] text-gray-600">${issue.createdAt}</p>
                </div>
            </div>
        `;
        }

        cardContainer.appendChild(card);
    }

}

loadAllIssue();



// ======== Displaying open issues =========
const loadOpenIssue = () => {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';

    fetch(url)
        .then(res => res.json())
        .then(get => displayOpenIssue(get.data))
}
const displayOpenIssue = (issues) => {
    for (let issue of issues) {

        if (issue.status == 'open') {

            const card = document.createElement('div');

            card.innerHTML = `
            <div onclick="my_modal_1.showModal()" class="card bg-white rounded-md border-t-4 border-green-400 h-full">
                <div class="p-4">
                    <div class="flex justify-between mb-3">
                        <img src="icons/Open-Status.png" alt="">
                        <p class="${issue.priority == 'high' ? 'bg-red-200 text-red-600' : issue.priority == 'medium' ? 'bg-yellow-200 text-yellow-600' : 'bg-green-200 text-green-600'} px-4 rounded-xl uppercase">${issue.priority}</p>
                    </div>
                    <h3 class="font-semibold text-purple-950">${issue.title}</h3>
                    <p class="text-gray-400 font-light text-[0.8rem] mt-1.5 mb-1.5">${issue.description}</p>
                    <div class="flex gap-1.5 mt-2">
                        <p class="${issue.labels[0] == 'enhancement' ? 'bg-green-200 text-green-500 border-green-500' : issue.labels[0] == 'documentation' ? 'bg-gray-200 text-gray-500 border-gray-500' : 'bg-red-200 text-red-500 border-red-500'} text-[0.7rem] py-1 px-3 rounded-2xl border">${issue.labels[0] == 'bug' ? '<i class="fa-solid fa-bug"></i> ' : issue.labels[0] == 'documentation' ? '<i class="fa-regular fa-clipboard"></i> ' : '<i class="fa-solid fa-code"></i> '} ${issue.labels[0]}</p>
                        <p class="${issue.labels[1] == 'enhancement' ? 'bg-green-200 text-green-500 border-green-500': issue.labels[1] == 'good first issue' ? 'bg-purple-200 text-purple-500 border-purple-500': issue.labels[1] == 'help wanted' ? 'bg-red-600 text-red-200 border-red-600' : 'bg-amber-100 text-amber-500 border-amber-500'} text-[0.7rem] py-1 px-3 rounded-2xl border"><i class="fa-solid fa-life-ring"></i> ${issue.labels[1]}</p>
                    </div>
                </div>
                <hr class="border-gray-300">
                <div class="p-4">
                    <p class="text-[0.9rem] text-gray-600">#${issue.id} by ${issue.author}</p>
                    <p class="text-[0.9rem] text-gray-600">${issue.createdAt}</p>
                </div>
            </div>
        `;

            cardContainer.appendChild(card);
        }

        issueCountBox.innerText = cardContainer.childNodes.length + ' Issues';
    }
}



// ========== Displaying closed issues =========
const loadClosedIssue = () => {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';

    fetch(url)
        .then(res => res.json())
        .then(get => displayClosedIssue(get.data))
}
const displayClosedIssue = (issues) => {
    for (let issue of issues) {

        if (issue.status == 'closed') {

            const card = document.createElement('div');

            card.innerHTML = `
            <div onclick="my_modal_1.showModal()" class="card bg-white rounded-md border-t-4 border-purple-700 h-full">
                <div class="p-4">
                    <div class="flex justify-between mb-3">
                        <img src="icons/Closed- Status.png" alt="">
                        <p class="${issue.priority == 'high' ? 'bg-red-200 text-red-600' : issue.priority == 'medium' ? 'bg-yellow-200 text-yellow-600' : 'bg-green-200 text-green-600'} px-4 rounded-xl uppercase">${issue.priority}</p>
                    </div>
                    <h3 class="font-semibold text-purple-950">${issue.title}</h3>
                    <p class="text-gray-400 font-light text-[0.8rem] mt-1.5 mb-1.5">${issue.description}</p>
                    <div class="flex gap-1.5 mt-2">
                        <p class="${issue.labels[0] == 'enhancement' ? 'bg-green-200 text-green-500 border-green-500' : issue.labels[0] == 'documentation' ? 'bg-gray-200 text-gray-500 border-gray-500' : 'bg-red-200 text-red-500 border-red-500'} text-[0.7rem] py-1 px-3 rounded-2xl border">${issue.labels[0] == 'bug' ? '<i class="fa-solid fa-bug"></i> ' : issue.labels[0] == 'documentation' ? '<i class="fa-regular fa-clipboard"></i> ' : '<i class="fa-solid fa-code"></i> '} ${issue.labels[0]}</p>
                        <p class="${issue.labels[1] == 'enhancement' ? 'bg-green-200 text-green-500 border-green-500': issue.labels[1] == 'good first issue' ? 'bg-purple-200 text-purple-500 border-purple-500': issue.labels[1] == 'help wanted' ? 'bg-red-600 text-red-200 border-red-600' : 'bg-amber-100 text-amber-500 border-amber-500'} text-[0.7rem] py-1 px-3 rounded-2xl border"><i class="fa-solid fa-life-ring"></i> ${issue.labels[1]}</p>
                    </div>
                </div>
                <hr class="border-gray-300">
                <div class="p-4">
                    <p class="text-[0.9rem] text-gray-600">#${issue.id} by ${issue.author}</p>
                    <p class="text-[0.9rem] text-gray-600">${issue.createdAt}</p>
                </div>
            </div>
        `;

            cardContainer.appendChild(card);
        }

        issueCountBox.innerText = cardContainer.childNodes.length + ' Issues';
    }
}


// ========== search functionality ==========
document.getElementById('btn-search').addEventListener('click', () => {

    allButton.classList.remove('btn-active');
    openButton.classList.remove('btn-active');
    closedButton.classList.remove('btn-active');

    cardContainer.innerHTML = '';

    const input = document.getElementById('input-search');
    const searchValue = input.value.trim().toLowerCase();
    // console.log(searchValue);

    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(res => res.json())
        .then(get => {
            const allIssue = get.data;
            // console.log(allIssue);
            const filterIssue = allIssue.filter((data) =>
                data.title.toLowerCase().includes(searchValue)
            );
            displayAllIssue(filterIssue);
        });
});