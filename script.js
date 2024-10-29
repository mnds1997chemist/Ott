// script.js

// Automatic Carousel Slide
const carouselslide = 5000; // 5 seconds
const carousel = document.querySelector('#carousel slide');
let carouselInstance;

// Function to start the carousel sliding
function startCarousel() {
    carouselInstance = setInterval(() => {
        const nextButton = carousel.querySelector('.carousel-control-next');
        nextButton.click();
    }, carouselInterval);
}

// Event listeners to pause/resume carousel on mouse enter/leave
carousel.addEventListener('mouseenter', () => clearInterval(carouselInstance));
carousel.addEventListener('mouseleave', startCarousel);

// Start the carousel when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', startCarousel);

// Search Functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="search"]');
    const cards = document.querySelectorAll('.card');

    // Add event listener for input changes in the search field
    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim(); // Trim whitespace
        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            // Using a regular expression for a more flexible search
            const regex = new RegExp(query, 'i'); // 'i' for case insensitive
            const isMatch = regex.test(title); // Show or hide card
        });
    });
});

// Dynamic Loading Example (Optional)
const categories = document.querySelectorAll('.nav-link.dropdown-item');
categories.forEach(category => {
    category.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        loadCategoryContent(category.textContent);
    });
});

function loadCategoryContent(category) {
    // Simulate loading content. In a real application, this might fetch data from an API.
    const contentArea = document.querySelector('#review');
    contentArea.innerHTML = ''; // Clear existing content
    contentArea.innerHTML = `<h4>${category} Movies</h4><p>Loading content for ${category}...</p>`;
    
    // Simulate an API call with setTimeout
    setTimeout(() => {
        contentArea.innerHTML += `<p>Here are some ${category} movies!</p>`;
        // You can dynamically create and append movie cards here based on the category
    }, 2000);
}





const movies = {
    "Action & Adventure": [
        { title: "bhagavant kesari", description: "Action bhagavant kesari Description", imageUrl: "images/bhagavant kesari.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE1MDE1ZDcwLTc2ZDctNGQ3YS05ODRkLWJlYzIwMjNhN2ViYS5qcGc" },
        { title: "dasara", description: "Action dasara Description", imageUrl: "images/dasara.jpg" },
        { title: "kotabommali", description: "Action kotabommali Description", imageUrl: "images/kota bommali.webp"},
        { title: "leo", description: "Action leo Description", imageUrl: "images/leo.jpg" },
        { title: "jailer", description: "Action jailer Description", imageUrl: "images/jailer.avif" },
        { title: "skanda", description: "Action skanda Description", imageUrl: "images/skanda.jpg" },
        { title: "christopher", description: "Action christopher Description", imageUrl: "images/crime/christopher.cms"},
        { title: "saakini daakini", description: "Action saakini daakini Description", imageUrl: "images/crime/saakini daakini.avif" },
        { title: "hunt", description: "Action hunt Description", imageUrl: "images/crime/hunt.avif"},
        { title: "leo", description: "Action leo Description", imageUrl: "images/leo.jpg" },
        { title: "curry & cyanide", description: "Action curry & cyanide Description", imageUrl: "images/crime/curry & cyanide.jpeg" },
        { title: "hit the 2nd case", description: "Action hit the 2nd case Description", imageUrl: "images/crime/hit the 2nd case.jpg"},
        { title: "aanandobrahma", description: "Action aanandobrahma Description", imageUrl: "images/horror/aanando brahma.jpg" },
        { title: "arundathi", description: "Action arundathi Description", imageUrl: "images/horror/arundathi.jpg" },
        
        { title: "asvins", description: "Action asvins Description", imageUrl: "images/horror/asvins.cms" },
        { title: "avunu", description: "Action avunu Description", imageUrl: "images/horror/avunu.jpg"},
        { title: "awe!", description: "Action awe! Description", imageUrl: "images/horror/awe!.jpg"},
        { title: "conjuring kannapan", description: "Action conjuring kannapan Description", imageUrl: "images/horror/Conjuring-Kannappan.jpg" },
        { title: "ante sundaranike", description: "Action ante sundaranike Description", imageUrl: "images/comedy/Ante Sundaraniki.jpg" },
        { title: "babu no.1 bullshit guy", description: "Action babu no.1 bullshit guy Description", imageUrl: "images/comedy/babu no.1 bullshit guy.avif"},
        { title: "bheesma", description: "Action bheesma Description", imageUrl: "images/comedy/bheeshma.jpg"},
        { title: "djtillu", description: "Action djtillu Description", imageUrl: "images/comedy/dj tillu.jpg"},
        { title: "f2", description: "Action f2 Description", imageUrl: "images/comedy/f2.jpg" },
        { title: "jathiratnalu", description: "Action jathiratnalu Description", imageUrl: "images/comedy/jathi ratnalu.jpg"},
        { title: "kushi", description: "Action kushi Description", imageUrl: "images/romance/Khushi-01.jpg"},
        { title: "most eligible bachelor", description: "Action most eligible bachelor Description", imageUrl: "images/comedy/most eligible bachelor.jpg"},
        { title: "tillu2", description: "Action tillu2 Description", imageUrl: "images/comedy/tillu2.webp"},
        
        { title: "samajavaragamana", description: "Action samajavaragamana Description", imageUrl: "images/comedy/samajavaragamana.avif"},
        { title: "711", description: "Action 711 Description", imageUrl: "images/sci-fic/7 11pm.jpg"},
        { title: "gaami", description: "Action gaami Description", imageUrl: "images/sci-fic/bg1_gaami.jpg"},
        { title: "karteekeya", description: "Action karteekeya Description", imageUrl: "images/sci-fic/karthikeya.jpg"},
        { title: "karteekeya 2", description: "Action karteekeya 2 Description", imageUrl: "images/sci-fic/Karthikeya_2_Poster.jpeg"},
        { title: "oxygen", description: "Action oxygen Description", imageUrl: "images/sci-fic/oxygen.jpg"},
        { title: "robo", description: "Action robo Description", imageUrl: "images/sci-fic/robo.jpg"},
        { title: "most eligible bachelor", description: "Action most eligible bachelor Description", imageUrl: "images/comedy/most eligible bachelor.jpg"},
        { title: "tillu2", description: "Action tillu2 Description", imageUrl: "images/comedy/tillu2.webp"}
    ],

    "Mystery&thriller": [
        { title: "bhagavant kesari", description: "Action bhagavant kesari Description", imageUrl: "images/bhagavant kesari.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE1MDE1ZDcwLTc2ZDctNGQ3YS05ODRkLWJlYzIwMjNhN2ViYS5qcGc" },
        { title: "dasara", description: "Action dasara Description", imageUrl: "images/dasara.jpg" },
        { title: "kotabommali", description: "Action kotabommali Description", imageUrl: "images/kota bommali.webp"},
        { title: "leo", description: "Action leo Description", imageUrl: "images/leo.jpg" },
        { title: "jailer", description: "Action jailer Description", imageUrl: "images/jailer.avif" },
        { title: "skanda", description: "Action skanda Description", imageUrl: "images/skanda.jpg" },
        { title: "christopher", description: "Action christopher Description", imageUrl: "images/crime/christopher.cms"},
        { title: "saakini daakini", description: "Action saakini daakini Description", imageUrl: "images/crime/saakini daakini.avif" },
        { title: "hunt", description: "Action hunt Description", imageUrl: "images/crime/hunt.avif"},
        { title: "leo", description: "Action leo Description", imageUrl: "images/leo.jpg" },
        { title: "curry & cyanide", description: "Action curry & cyanide Description", imageUrl: "images/crime/curry & cyanide.jpeg" },
        { title: "hit the 2nd case", description: "Action hit the 2nd case Description", imageUrl: "images/crime/hit the 2nd case.jpg"},
        { title: "aanandobrahma", description: "Action aanandobrahma Description", imageUrl: "images/horror/aanando brahma.jpg" },
        { title: "arundathi", description: "Action arundathi Description", imageUrl: "images/horror/arundathi.jpg" },
        
        { title: "asvins", description: "Action asvins Description", imageUrl: "images/horror/asvins.cms" },
        { title: "avunu", description: "Action avunu Description", imageUrl: "images/horror/avunu.jpg"},
        { title: "awe!", description: "Action awe! Description", imageUrl: "images/horror/awe!.jpg"},
        { title: "conjuring kannapan", description: "Action conjuring kannapan Description", imageUrl: "images/horror/Conjuring-Kannappan.jpg" },
        { title: "ante sundaranike", description: "Action ante sundaranike Description", imageUrl: "images/comedy/Ante Sundaraniki.jpg" },
        { title: "babu no.1 bullshit guy", description: "Action babu no.1 bullshit guy Description", imageUrl: "images/comedy/babu no.1 bullshit guy.avif"},
        { title: "bheesma", description: "Action bheesma Description", imageUrl: "images/comedy/bheeshma.jpg"},
        { title: "djtillu", description: "Action djtillu Description", imageUrl: "images/comedy/dj tillu.jpg"},
        { title: "f2", description: "Action f2 Description", imageUrl: "images/comedy/f2.jpg" },
        { title: "jathiratnalu", description: "Action jathiratnalu Description", imageUrl: "images/comedy/jathi ratnalu.jpg"},
        { title: "kushi", description: "Action kushi Description", imageUrl: "images/romance/Khushi-01.jpg"},
        { title: "most eligible bachelor", description: "Action most eligible bachelor Description", imageUrl: "images/comedy/most eligible bachelor.jpg"},
        { title: "tillu2", description: "Action tillu2 Description", imageUrl: "images/comedy/tillu2.webp"},
        
        { title: "samajavaragamana", description: "Action samajavaragamana Description", imageUrl: "images/comedy/samajavaragamana.avif"},
        { title: "711", description: "Action 711 Description", imageUrl: "images/sci-fic/7 11pm.jpg"},
        { title: "gaami", description: "Action gaami Description", imageUrl: "images/sci-fic/bg1_gaami.jpg"},
        { title: "karteekeya", description: "Action karteekeya Description", imageUrl: "images/sci-fic/karthikeya.jpg"},
        { title: "karteekeya 2", description: "Action karteekeya 2 Description", imageUrl: "images/sci-fic/Karthikeya_2_Poster.jpeg"},
        { title: "oxygen", description: "Action oxygen Description", imageUrl: "images/sci-fic/oxygen.jpg"},
        { title: "robo", description: "Action robo Description", imageUrl: "images/sci-fic/robo.jpg"},
        { title: "most eligible bachelor", description: "Action most eligible bachelor Description", imageUrl: "images/comedy/most eligible bachelor.jpg"},
        { title: "tillu2", description: "Action tillu2 Description", imageUrl: "images/comedy/tillu2.webp"}
    ],

        "horror": [
            { title: "bhagavant kesari", description: "Action bhagavant kesari Description", imageUrl: "images/bhagavant kesari.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE1MDE1ZDcwLTc2ZDctNGQ3YS05ODRkLWJlYzIwMjNhN2ViYS5qcGc" },
            { title: "dasara", description: "Action dasara Description", imageUrl: "images/dasara.jpg" },
            { title: "kotabommali", description: "Action kotabommali Description", imageUrl: "images/kota bommali.webp"},
            { title: "leo", description: "Action leo Description", imageUrl: "images/leo.jpg" },
            { title: "jailer", description: "Action jailer Description", imageUrl: "images/jailer.avif" },
            { title: "skanda", description: "Action skanda Description", imageUrl: "images/skanda.jpg" },
            { title: "christopher", description: "Action christopher Description", imageUrl: "images/crime/christopher.cms"},
            { title: "saakini daakini", description: "Action saakini daakini Description", imageUrl: "images/crime/saakini daakini.avif" },
            { title: "hunt", description: "Action hunt Description", imageUrl: "images/crime/hunt.avif"},
            { title: "leo", description: "Action leo Description", imageUrl: "images/leo.jpg" },
            { title: "curry & cyanide", description: "Action curry & cyanide Description", imageUrl: "images/crime/curry & cyanide.jpeg" },
            { title: "hit the 2nd case", description: "Action hit the 2nd case Description", imageUrl: "images/crime/hit the 2nd case.jpg"},
            { title: "aanandobrahma", description: "Action aanandobrahma Description", imageUrl: "images/horror/aanando brahma.jpg" },
            { title: "arundathi", description: "Action arundathi Description", imageUrl: "images/horror/arundathi.jpg" },
            
            { title: "asvins", description: "Action asvins Description", imageUrl: "images/horror/asvins.cms" },
            { title: "avunu", description: "Action avunu Description", imageUrl: "images/horror/avunu.jpg"},
            { title: "awe!", description: "Action awe! Description", imageUrl: "images/horror/awe!.jpg"},
            { title: "conjuring kannapan", description: "Action conjuring kannapan Description", imageUrl: "images/horror/Conjuring-Kannappan.jpg" },
            { title: "ante sundaranike", description: "Action ante sundaranike Description", imageUrl: "images/comedy/Ante Sundaraniki.jpg" },
            { title: "babu no.1 bullshit guy", description: "Action babu no.1 bullshit guy Description", imageUrl: "images/comedy/babu no.1 bullshit guy.avif"},
            { title: "bheesma", description: "Action bheesma Description", imageUrl: "images/comedy/bheeshma.jpg"},
            { title: "djtillu", description: "Action djtillu Description", imageUrl: "images/comedy/dj tillu.jpg"},
            { title: "f2", description: "Action f2 Description", imageUrl: "images/comedy/f2.jpg" },
            { title: "jathiratnalu", description: "Action jathiratnalu Description", imageUrl: "images/comedy/jathi ratnalu.jpg"},
            { title: "kushi", description: "Action kushi Description", imageUrl: "images/romance/Khushi-01.jpg"},
            { title: "most eligible bachelor", description: "Action most eligible bachelor Description", imageUrl: "images/comedy/most eligible bachelor.jpg"},
            { title: "tillu2", description: "Action tillu2 Description", imageUrl: "images/comedy/tillu2.webp"},
            
            { title: "samajavaragamana", description: "Action samajavaragamana Description", imageUrl: "images/comedy/samajavaragamana.avif"},
            { title: "711", description: "Action 711 Description", imageUrl: "images/sci-fic/7 11pm.jpg"},
            { title: "gaami", description: "Action gaami Description", imageUrl: "images/sci-fic/bg1_gaami.jpg"},
            { title: "karteekeya", description: "Action karteekeya Description", imageUrl: "images/sci-fic/karthikeya.jpg"},
            { title: "karteekeya 2", description: "Action karteekeya 2 Description", imageUrl: "images/sci-fic/Karthikeya_2_Poster.jpeg"},
            { title: "oxygen", description: "Action oxygen Description", imageUrl: "images/sci-fic/oxygen.jpg"},
            { title: "robo", description: "Action robo Description", imageUrl: "images/sci-fic/robo.jpg"},
            { title: "most eligible bachelor", description: "Action most eligible bachelor Description", imageUrl: "images/comedy/most eligible bachelor.jpg"},
            { title: "tillu2", description: "Action tillu2 Description", imageUrl: "images/comedy/tillu2.webp"}
    ],

    "Romance": [
        { title: "bhagavant kesari", description: "Action bhagavant kesari Description", imageUrl: "images/bhagavant kesari.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE1MDE1ZDcwLTc2ZDctNGQ3YS05ODRkLWJlYzIwMjNhN2ViYS5qcGc" },
        { title: "dasara", description: "Action dasara Description", imageUrl: "images/dasara.jpg" },
        { title: "kotabommali", description: "Action kotabommali Description", imageUrl: "images/kota bommali.webp"},
        { title: "leo", description: "Action leo Description", imageUrl: "images/leo.jpg" },
        { title: "jailer", description: "Action jailer Description", imageUrl: "images/jailer.avif" },
        { title: "skanda", description: "Action skanda Description", imageUrl: "images/skanda.jpg" },
        { title: "christopher", description: "Action christopher Description", imageUrl: "images/crime/christopher.cms"},
        { title: "saakini daakini", description: "Action saakini daakini Description", imageUrl: "images/crime/saakini daakini.avif" },
        { title: "hunt", description: "Action hunt Description", imageUrl: "images/crime/hunt.avif"},
        { title: "leo", description: "Action leo Description", imageUrl: "images/leo.jpg" },
        { title: "curry & cyanide", description: "Action curry & cyanide Description", imageUrl: "images/crime/curry & cyanide.jpeg" },
        { title: "hit the 2nd case", description: "Action hit the 2nd case Description", imageUrl: "images/crime/hit the 2nd case.jpg"},
        { title: "aanandobrahma", description: "Action aanandobrahma Description", imageUrl: "images/horror/aanando brahma.jpg" },
        { title: "arundathi", description: "Action arundathi Description", imageUrl: "images/horror/arundathi.jpg" },
        
        { title: "asvins", description: "Action asvins Description", imageUrl: "images/horror/asvins.cms" },
        { title: "avunu", description: "Action avunu Description", imageUrl: "images/horror/avunu.jpg"},
        { title: "awe!", description: "Action awe! Description", imageUrl: "images/horror/awe!.jpg"},
        { title: "conjuring kannapan", description: "Action conjuring kannapan Description", imageUrl: "images/horror/Conjuring-Kannappan.jpg" },
        { title: "ante sundaranike", description: "Action ante sundaranike Description", imageUrl: "images/comedy/Ante Sundaraniki.jpg" },
        { title: "babu no.1 bullshit guy", description: "Action babu no.1 bullshit guy Description", imageUrl: "images/comedy/babu no.1 bullshit guy.avif"},
        { title: "bheesma", description: "Action bheesma Description", imageUrl: "images/comedy/bheeshma.jpg"},
        { title: "djtillu", description: "Action djtillu Description", imageUrl: "images/comedy/dj tillu.jpg"},
        { title: "f2", description: "Action f2 Description", imageUrl: "images/comedy/f2.jpg" },
        { title: "jathiratnalu", description: "Action jathiratnalu Description", imageUrl: "images/comedy/jathi ratnalu.jpg"},
        { title: "kushi", description: "Action kushi Description", imageUrl: "images/romance/Khushi-01.jpg"},
        { title: "most eligible bachelor", description: "Action most eligible bachelor Description", imageUrl: "images/comedy/most eligible bachelor.jpg"},
        { title: "tillu2", description: "Action tillu2 Description", imageUrl: "images/comedy/tillu2.webp"},
        
        { title: "samajavaragamana", description: "Action samajavaragamana Description", imageUrl: "images/comedy/samajavaragamana.avif"},
        { title: "711", description: "Action 711 Description", imageUrl: "images/sci-fic/7 11pm.jpg"},
        { title: "gaami", description: "Action gaami Description", imageUrl: "images/sci-fic/bg1_gaami.jpg"},
        { title: "karteekeya", description: "Action karteekeya Description", imageUrl: "images/sci-fic/karthikeya.jpg"},
        { title: "karteekeya 2", description: "Action karteekeya 2 Description", imageUrl: "images/sci-fic/Karthikeya_2_Poster.jpeg"},
        { title: "oxygen", description: "Action oxygen Description", imageUrl: "images/sci-fic/oxygen.jpg"},
        { title: "robo", description: "Action robo Description", imageUrl: "images/sci-fic/robo.jpg"},
        { title: "most eligible bachelor", description: "Action most eligible bachelor Description", imageUrl: "images/comedy/most eligible bachelor.jpg"},
        { title: "tillu2", description: "Action tillu2 Description", imageUrl: "images/comedy/tillu2.webp"}
    ],

        "Comedy": [
            { title: "bhagavant kesari", description: "Action bhagavant kesari Description", imageUrl: "images/bhagavant kesari.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE1MDE1ZDcwLTc2ZDctNGQ3YS05ODRkLWJlYzIwMjNhN2ViYS5qcGc" },
            { title: "dasara", description: "Action dasara Description", imageUrl: "images/dasara.jpg" },
            { title: "kotabommali", description: "Action kotabommali Description", imageUrl: "images/kota bommali.webp"},
            { title: "leo", description: "Action leo Description", imageUrl: "images/leo.jpg" },
            { title: "jailer", description: "Action jailer Description", imageUrl: "images/jailer.avif" },
            { title: "skanda", description: "Action skanda Description", imageUrl: "images/skanda.jpg" },
            { title: "christopher", description: "Action christopher Description", imageUrl: "images/crime/christopher.cms"},
            { title: "saakini daakini", description: "Action saakini daakini Description", imageUrl: "images/crime/saakini daakini.avif" },
            { title: "hunt", description: "Action hunt Description", imageUrl: "images/crime/hunt.avif"},
            { title: "leo", description: "Action leo Description", imageUrl: "images/leo.jpg" },
            { title: "curry & cyanide", description: "Action curry & cyanide Description", imageUrl: "images/crime/curry & cyanide.jpeg" },
            { title: "hit the 2nd case", description: "Action hit the 2nd case Description", imageUrl: "images/crime/hit the 2nd case.jpg"},
            { title: "aanandobrahma", description: "Action aanandobrahma Description", imageUrl: "images/horror/aanando brahma.jpg" },
            { title: "arundathi", description: "Action arundathi Description", imageUrl: "images/horror/arundathi.jpg" },
            
            { title: "asvins", description: "Action asvins Description", imageUrl: "images/horror/asvins.cms" },
            { title: "avunu", description: "Action avunu Description", imageUrl: "images/horror/avunu.jpg"},
            { title: "awe!", description: "Action awe! Description", imageUrl: "images/horror/awe!.jpg"},
            { title: "conjuring kannapan", description: "Action conjuring kannapan Description", imageUrl: "images/horror/Conjuring-Kannappan.jpg" },
            { title: "ante sundaranike", description: "Action ante sundaranike Description", imageUrl: "images/comedy/Ante Sundaraniki.jpg" },
            { title: "babu no.1 bullshit guy", description: "Action babu no.1 bullshit guy Description", imageUrl: "images/comedy/babu no.1 bullshit guy.avif"},
            { title: "bheesma", description: "Action bheesma Description", imageUrl: "images/comedy/bheeshma.jpg"},
            { title: "djtillu", description: "Action djtillu Description", imageUrl: "images/comedy/dj tillu.jpg"},
            { title: "f2", description: "Action f2 Description", imageUrl: "images/comedy/f2.jpg" },
            { title: "jathiratnalu", description: "Action jathiratnalu Description", imageUrl: "images/comedy/jathi ratnalu.jpg"},
            { title: "kushi", description: "Action kushi Description", imageUrl: "images/romance/Khushi-01.jpg"},
            { title: "most eligible bachelor", description: "Action most eligible bachelor Description", imageUrl: "images/comedy/most eligible bachelor.jpg"},
            { title: "tillu2", description: "Action tillu2 Description", imageUrl: "images/comedy/tillu2.webp"},
            
            { title: "samajavaragamana", description: "Action samajavaragamana Description", imageUrl: "images/comedy/samajavaragamana.avif"},
            { title: "711", description: "Action 711 Description", imageUrl: "images/sci-fic/7 11pm.jpg"},
            { title: "gaami", description: "Action gaami Description", imageUrl: "images/sci-fic/bg1_gaami.jpg"},
            { title: "karteekeya", description: "Action karteekeya Description", imageUrl: "images/sci-fic/karthikeya.jpg"},
            { title: "karteekeya 2", description: "Action karteekeya 2 Description", imageUrl: "images/sci-fic/Karthikeya_2_Poster.jpeg"},
            { title: "oxygen", description: "Action oxygen Description", imageUrl: "images/sci-fic/oxygen.jpg"},
            { title: "robo", description: "Action robo Description", imageUrl: "images/sci-fic/robo.jpg"},
            { title: "most eligible bachelor", description: "Action most eligible bachelor Description", imageUrl: "images/comedy/most eligible bachelor.jpg"},
            { title: "tillu2", description: "Action tillu2 Description", imageUrl: "images/comedy/tillu2.webp"}
    ],

    "sci-fic": [
        { title: "bhagavant kesari", description: "Action bhagavant kesari Description", imageUrl: "images/bhagavant kesari.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE1MDE1ZDcwLTc2ZDctNGQ3YS05ODRkLWJlYzIwMjNhN2ViYS5qcGc" },
        { title: "dasara", description: "Action dasara Description", imageUrl: "images/dasara.jpg" },
        { title: "kotabommali", description: "Action kotabommali Description", imageUrl: "images/kota bommali.webp"},
        { title: "leo", description: "Action leo Description", imageUrl: "images/leo.jpg" },
        { title: "jailer", description: "Action jailer Description", imageUrl: "images/jailer.avif" },
        { title: "skanda", description: "Action skanda Description", imageUrl: "images/skanda.jpg" },
        { title: "christopher", description: "Action christopher Description", imageUrl: "images/crime/christopher.cms"},
        { title: "saakini daakini", description: "Action saakini daakini Description", imageUrl: "images/crime/saakini daakini.avif" },
        { title: "hunt", description: "Action hunt Description", imageUrl: "images/crime/hunt.avif"},
        { title: "leo", description: "Action leo Description", imageUrl: "images/leo.jpg" },
        { title: "curry & cyanide", description: "Action curry & cyanide Description", imageUrl: "images/crime/curry & cyanide.jpeg" },
        { title: "hit the 2nd case", description: "Action hit the 2nd case Description", imageUrl: "images/crime/hit the 2nd case.jpg"},
        { title: "aanandobrahma", description: "Action aanandobrahma Description", imageUrl: "images/horror/aanando brahma.jpg" },
        { title: "arundathi", description: "Action arundathi Description", imageUrl: "images/horror/arundathi.jpg" },
        
        { title: "asvins", description: "Action asvins Description", imageUrl: "images/horror/asvins.cms" },
        { title: "avunu", description: "Action avunu Description", imageUrl: "images/horror/avunu.jpg"},
        { title: "awe!", description: "Action awe! Description", imageUrl: "images/horror/awe!.jpg"},
        { title: "conjuring kannapan", description: "Action conjuring kannapan Description", imageUrl: "images/horror/Conjuring-Kannappan.jpg" },
        { title: "ante sundaranike", description: "Action ante sundaranike Description", imageUrl: "images/comedy/Ante Sundaraniki.jpg" },
        { title: "babu no.1 bullshit guy", description: "Action babu no.1 bullshit guy Description", imageUrl: "images/comedy/babu no.1 bullshit guy.avif"},
        { title: "bheesma", description: "Action bheesma Description", imageUrl: "images/comedy/bheeshma.jpg"},
        { title: "djtillu", description: "Action djtillu Description", imageUrl: "images/comedy/dj tillu.jpg"},
        { title: "f2", description: "Action f2 Description", imageUrl: "images/comedy/f2.jpg" },
        { title: "jathiratnalu", description: "Action jathiratnalu Description", imageUrl: "images/comedy/jathi ratnalu.jpg"},
        { title: "kushi", description: "Action kushi Description", imageUrl: "images/romance/Khushi-01.jpg"},
        { title: "most eligible bachelor", description: "Action most eligible bachelor Description", imageUrl: "images/comedy/most eligible bachelor.jpg"},
        { title: "tillu2", description: "Action tillu2 Description", imageUrl: "images/comedy/tillu2.webp"},
        
        { title: "samajavaragamana", description: "Action samajavaragamana Description", imageUrl: "images/comedy/samajavaragamana.avif"},
        { title: "711", description: "Action 711 Description", imageUrl: "images/sci-fic/7 11pm.jpg"},
        { title: "gaami", description: "Action gaami Description", imageUrl: "images/sci-fic/bg1_gaami.jpg"},
        { title: "karteekeya", description: "Action karteekeya Description", imageUrl: "images/sci-fic/karthikeya.jpg"},
        { title: "karteekeya 2", description: "Action karteekeya 2 Description", imageUrl: "images/sci-fic/Karthikeya_2_Poster.jpeg"},
        { title: "oxygen", description: "Action oxygen Description", imageUrl: "images/sci-fic/oxygen.jpg"},
        { title: "robo", description: "Action robo Description", imageUrl: "images/sci-fic/robo.jpg"},
        { title: "most eligible bachelor", description: "Action most eligible bachelor Description", imageUrl: "images/comedy/most eligible bachelor.jpg"},
        { title: "tillu2", description: "Action tillu2 Description", imageUrl: "images/comedy/tillu2.webp"}
    ],
    // Add more categories and movies as needed
};

function loadCategoryContent(category) {
    const contentArea = document.querySelector('#review');
    contentArea.innerHTML = ''; // Clear existing content
    contentArea.innerHTML = `<h4>${category} Movies</h4><p>Loading content for ${category}...</p>`;
    
    // Simulate an API call with setTimeout
    setTimeout(() => {
        const categoryMovies = movies[category] || [];
        categoryMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';
            movieCard.innerHTML = `
                <div class="card" style="background-color: black; border-color: white; color: gold;">
                    <img src="${movie.imageUrl}" class="card-img-top tea" alt="${movie.title}" style="height: 500px;">
                    <div class="card-body">
                        <h5 class="card-title" style="text-decoration: blue underline;">${movie.title}</h5>
                        <p class="card-text">${movie.description}</p>
                    </div>
                </div>
            `;
            contentArea.appendChild(movieCard);
        });
    }, 2000);
}


// Sample movie data for redirection
const movie = {
    "Guntur Karam": "guntur-karam.html",
    "Hanu-Man": "hanu-man.html",
    "Naa Saami Ranga": "naa-saami-ranga.html",
    "Operation Valentine": "operation-valantine.html",
    "Anandobrahma": "Anandobrahma.html",
    
    "AnteSundaranike": "AnteSundaranike.html",
    "Arundathi": "Arundathi.html",
    "Asvins": "Asvins.html",
    "avunu": "avunu.html",
    "Awe!": "Awe!.html",

    "Babubullshitguy": "Babubullshitguy.html",
    "Bachelor": "Bachelor.html",
    "bhagavant kesari": "bhagavant kesari.html",
    "Bheesma": "Bheesma.html",
    "bridgerton": "bridgerton.html",

    "Christopher": "Christopher.html",
    "Conjuringkannapan": "Conjuringkannapan.html",
    "Curry&cyanide": "Curry&cyanide.html",
    "Dasara": "Dasara.html",
    "Djtillu": "Djtillu.html",

    "f2": "f2.html",
    "fleabag": "fleabag.html",
    "Gaami": "Gaami.html",
    "goodomens": "goodomens.html",
    "hanna": "hanna.html",
    
    "Hit": "Hit.html",
    "Hunt": "Hunt.html",
    "jaathiratnalu": "jaathiratnalu.html",
    "jackrayan": "jackrayan.html",
    "jailer": "jailer.html",

    "Karteekeya": "Karteekeya.html",
    "kartikeya2": "kartikeya2.html",
    "KotaBommali": "KotaBommali.html",
    "kushi": "kushi.html",
    "Leo": "Leo.html",

    "lupin": "lupin.html",
    "mindhunter": "mindhunter.html",
    "moneyheist": "moneyheist.html",
    "oxygen": "oxygen.html",
    "ozark": "ozark.html",

    "robot": "robot.html",
    "SaakiniDaakini": "SaakiniDaakini.html",
    "saamajavaragamana": "saamajavaragamana.html",
    "skanda": "skanda.html",
    "squidgame": "squidgame.html",

    "strangerthings": "strangerthings.html",
    "theboys": "theboys.html",
    "thecrown": "thecrown.html",
    "theexpanse": "theexpanse.html",
    "themaninthecastle": "themaninthecastle.html",

    "themarvelouemaisel": "themarvelouemaisel.html",
    "theumberellaacademy": "theumberellaacademy.html",
    "thewitches": "thewitches.html",
    "tillu2": "tillu2.html",
    
    // Add more movie titles and their corresponding HTML file names as needed
};

// Search Functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="search"]');

    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { // Listen for the Enter key
            const query = this.value.trim();
            const moviePage = movie[query];

            if (moviePage) {
                window.location.href = moviePage; // Redirect to the movie page
            } else {
                alert('Movie not found! Please try again.'); // Alert if not found
            }
        }
    });
});  

