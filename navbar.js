//Many thanks to andrews05 in the EV Nova Discord for helping me set this up!! And by help me set this up, I mean he wrote the skeleton of it because I have no idea what I'm doing with JavaScript yet, and I filled in my pages and stuff. I didn't think this was possible on a static website, thanks for opening my eyes to new possibilities!

let islocal = location.protocol == "https:" ? '' : '.html';

let links = [
	{ path: 'index', title: 'Main' },
	
	//{ title: 'Ghosts', sublinks: [
		//{ title: 'Ghosty ghosts' },
		{ path: 'tadora', title: 'Tadora i Buterbrod' },
	//] },
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
		return `<button><a href="${basepath}${link.path}${islocal}" ${className}>${link.title}</a></button>`;
	} else if (link.sublinks) {
		return `
			<div class="dropdown">
					<button>${link.title}
						<i class="fa fa-caret-down"></i>
					</button>
					<div class="dropdown-content">
						<div class="window">
							<div class="window-body">
								${link.sublinks.map(linkHTML).join('')}
								</fieldset></p>
							</div>
						</div>
					</div>
				</div>
			</div>`;
	} else {
		return `<fieldset><legend>${link.title}</legend><br>`;
	}
}

findActive(links);
document.getElementById('navbar').innerHTML = links.map(linkHTML).join('');
Collapse