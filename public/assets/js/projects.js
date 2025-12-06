// assets/js/projects.js
const projects = [
  {
    title: "Employee Management API",
    desc: "Secure REST API with Laravel + Sanctum, Docker-deployed on Render.",
    img: "assets/images/projects/employee-api.jpg",
    tags: ["Laravel", "Sanctum", "MySQL", "Docker", "Render"],
    github: "https://github.com/rohit4224mehta/employee-api",
    live: "https://employee-api-rohit.onrender.com",
    postman: "https://employee-api-rohit.onrender.com/api/documentation",
    liveBadge: "LIVE on Render"
  },
  // Add more projects here...
];

function createProjectCard(p) {
  const card = document.createElement('div');
  card.className = "bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-gray-100";
  card.innerHTML = `
    <div class="relative h-56 bg-gradient-to-br from-indigo-600 to-purple-700 overflow-hidden">
      <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      ${p.liveBadge ? `<div class="absolute top-4 right-4 bg-green-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">${p.liveBadge}</div>` : ''}
    </div>
    <div class="p-7">
      <h3 class="text-2xl font-bold text-gray-900 mb-3">${p.title}</h3>
      <p class="text-gray-600 mb-5 leading-relaxed">${p.desc}</p>
      <div class="flex flex-wrap gap-2 mb-5">
        ${p.tags.map(tag => `<span class="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">${tag}</span>`).join('')}
      </div>
      <div class="flex gap-6">
        <a href="${p.github}" target="_blank" class="text-indigo-600 font-bold hover:underline">GitHub</a>
        ${p.live ? `<a href="${p.live}" target="_blank" class="text-gray-600 font-medium">Live Demo</a>` : ''}
        ${p.postman ? `<a href="${p.postman}" target="_blank" class="text-gray-600 font-medium">Postman Docs</a>` : ''}
      </div>
    </div>
  `;
  document.querySelector('#projects-grid').appendChild(card);
}

// Load all projects
projects.forEach(createProjectCard);