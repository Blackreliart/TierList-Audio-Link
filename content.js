function addButtons() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Ignoriere zu kleine Bilder und verhinder doppelte Buttons
        if (img.naturalWidth < 50 || img.parentElement.querySelector('.play-btn')) return;

        const btn = document.createElement('button');
        btn.innerText = "▶";
        btn.className = "play-btn";
        btn.style.cssText = `
            position: absolute; top: 5px; right: 5px; z-index: 9999; cursor: pointer; 
            background: rgba(0,0,0,0.7); color: white; border: 1px solid white; 
            border-radius: 50%; width: 24px; height: 24px; font-size: 12px;
            display: flex; align-items: center; justify-content: center;
        `;
        
        btn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // 1. Hole den Pfad
            let name = img.src.split('/').pop().split('?')[0];
            
            // 2. Ersetze Bindestriche
            name = name.replace(/-/g, ' ');
            
            // 3. Filter: Entfernt jpg, png, jpeg usw. global (auch ohne Punkt)
            const filterRegex = /jpg|png|jpeg|webp|gif|svg/gi;
            let songName = name.replace(filterRegex, "").trim();
            
            // 4. Aufräumen
            songName = songName.replace(/\.+/g, '').replace(/\s+/g, ' ').trim();
            
            console.log("Suchbegriff:", songName);
            
            window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(songName)}`, '_blank');
        };
        
        img.parentElement.style.position = "relative";
        img.parentElement.appendChild(btn);
    });
}

setInterval(addButtons, 2000);