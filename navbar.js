//Many thanks to andrews05 in the EV Nova Discord for helping me set this up!! And by help me set this up, I mean he wrote the skeleton of it because I have no idea what I'm doing with JavaScript yet, and I filled in my pages and stuff. I didn't think this was possible on a static website, thanks for opening my eyes to new possibilities!

let islocal = location.protocol == "https:" ? '' : '.html';

let links = [
	{ path: 'index', title: 'Main' },
	{ path: 'ghostguide_by', title: 'Як стварыць укагаку (YAYA)' },
	
	{ title: 'Ghosts', sublinks: [
		{ title: 'Ghosty ghosts' },
		{ path: 'p_m', title: 'Pasha and Misha' },
		{ path: 'tadora', title: 'Tadora i Buterbrod' },
		{ path: 'stickerbook', title: 'Stickerbook' },
		{ path: 'shipwreck', title: 'The Perpetual Shipwreck of a Poet' },
		{ title: 'Jam Ghosts' },
		{ path: 'r_n', title: 'Rocky and Noteworthy' },
		{ path: 'spring_cleaning', title: 'Весняя уборка' },
		{ path: 'ghost_jam_2022', title: 'Ghost Jam 22' },
		{ path: 'ghost_jam_2023', title: 'Ghost Jam 23' },
		{ path: 'ghost_jam_2024', title: 'Ghost Jam 24' },
		{ path: 'ghost_jam_2025', title: 'Ghost Jam 25' },
		{ path: 'idea_adoption_2023', title: 'Idea Adoption Jam 23' },
		{ path: 'idea_adoption_2024', title: 'Idea Adoption Jam 24' },
		{ title: 'Templates' },
		{ path: 'simplicity_ru', title: 'Шаблон простота' },
		{ path: 'horror_template', title: 'Smokys Horror Template' },
	] },
	{ title: 'Shells', sublinks: [
		{ title: 'Ghosty shells' },
		//{ path: 'shell/water_dishes', title: 'Water Dishes (Hydrate)' },
		//{ path: 'shell/ordis', title: 'Ordis (FLUX/FLELE)' },
		//{ path: 'shell/sad_statue', title: 'Very Sad Statue (Hydrate)' },
		//{ path: 'shell/cup_of_dirt', title: 'Cup of Dirt (Hydrate)' },
		//{ path: 'shell/irl_tadora', title: 'I.R.L Tadora' },
		//{ title: 'Freeshells' },
		//{ path: 'shell/free/kittypunk', title: 'Kittypunk' },
		//{ path: 'shell/free/sheetcat', title: 'Sheet cat' },
	] },
];

let basepath = '';
let active = null;

function findActive(links) {
	for (let link of links) {
		if (link.path && location.pathname.endsWith(link.path)) {
			active = link;
			basepath = location.pathname.substring(0, location.pathname.length-link.path.length);
		}
		if (link.sublinks) {
			findActive(link.sublinks);
		}
	}
}

function linkHTML(link) {
	if (link.title == "Home" && !islocal)
	{
		let className = link == active ? 'class="active"' : '';
		return `<a href="/indifferentsorrel/" ${className}>${link.title}</a>`;
	}
	else if (link.path) {
		//Edited this slightly so that the 'class=' bit is part of the variable. Otherwise there was just the word 'class' sitting on its own in the divs, and that seemed weird and like something I don't want. (Not sure why/how it didn't have an '=""' part... perhaps a side effect of inspect element or something?)
		let className = link == active ? 'class="active"' : '';
		return ` <button><a href="${basepath}${link.path}${islocal}" ${className}>${link.title}</a></button>`;
	} else if (link.sublinks) {
		return `
			<fieldset><legend>
				${link.title}
					<i class="fa fa-caret-down"></i>
				</legend>
					<div class="window-content">
						${link.sublinks.map(linkHTML).join('')}
					</div><br>
			</fieldset>`;
	} else {
		return `<br><b>${link.title}: </b>`;
	}
}

findActive(links);
document.getElementById('navbar').innerHTML = links.map(linkHTML).join('');
Collapse