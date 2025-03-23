const express = require('express');
const path = require('path');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('home', { 
        title: 'Home', 
        header: 'MJ Interior Design Studio', 
        message: 'At MJ Interior Design Studio, we bring your visions to life with innovative and sustainable solutions. Our team creates beautiful, functional spaces that inspire and transform.',
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About Us', 
        header: 'About Us', 
        message1: 'At MJ Interior Design Studio, we specialize in transforming both interiors and exteriors into stunning, functional spaces. From elegant kitchens and stylish bedrooms to custom railings, feature walls, and breathtaking landscapes, we bring creativity and craftsmanship together to enhance beauty, comfort, and functionality in every detail.',
        message2: 'Our expertise spans every aspect of design, ensuring a seamless process from concept to completion. Whether it’s a full home renovation, an outdoor retreat, or a single-room makeover, we combine innovation with practicality to create spaces that reflect your vision and lifestyle. Using advanced design tools and sustainable materials, we optimize every project for efficiency, durability, and aesthetic excellence.',
        message3: 'With a keen eye for detail and a deep understanding of modern trends, materials, and construction techniques, we craft interiors and exteriors that are both timeless and contemporary. Our goal is to not only enhance the way you live but to elevate your surroundings into spaces that inspire and endure.',
        message4: 'Let MJ Interior Design Studio turn your dream space into reality—inside and out.',
    });
});

app.get('/services', (req, res) => {
    res.render('services', { 
        title: 'Services', 
        header1: 'Residential Services', 
        message1: 'Transform your living spaces with our range of residential services.',
        header2: 'Commercial Services', 
        message2: 'Enhance your commercial spaces with our professional services.',
        header3: 'Other Services', 
        message3: 'Discover more ways we can help you with our additional services.',
     });
});

app.get('/projects', (req, res) => {
    res.render('projects', { 
        title: 'Projects', 
        header: 'Our Projects', 
        message: 'Discover the amazing projects we have completed.'
     });
});

app.get('/project1', (req, res) => {
    res.render('project1' , {
        title: 'Luxury Apartment in Jabal Amman - Project Details', 
        header: 'Luxury Apartment', 
        location: 'Jabal Amman, Jordan',
        designer: 'Mohammed Jaber',
        description: 'Located in the prestigious area of Jabal Amman, this luxury villa project showcases exquisite woodwork in various rooms. Our work included crafting custom cabinetry, shelving, and doors, all designed to enhance the elegance and functionality of the spaces. The modern design features high-end finishes, creating a seamless blend of aesthetics and practicality.',
    });
});

app.get('/project2', (req, res) => {
    res.render('project2' , {
        title: 'Modern Residence in Dabouq - Project Details', 
        header: 'Modern Residence', 
        location: 'Dabouq District, Amman',
        designer: 'Wissam Hijazi',
        description: 'This modern residence project located in the upscale Dabouq district of Amman features a striking upstairs steel structure. The design aims to seamlessly integrate contemporary aesthetics with structural functionality. Our work involved constructing a robust steel staircase that connects the floors, providing both support and a sleek, modern look. The staircase design ensures durability while adding a visual centerpiece to the residence.',
    });
});

app.get('/project3', (req, res) => {
    res.render('project3' , {
        title: 'Luxury Villa in Abdoun - Project Details', 
        header: 'Luxury Villa', 
        location: 'Abdoun, Amman',
        designer: 'Wissam Hijazi',
        description: 'Situated in the prestigious Abdoun area of Amman, this luxury villa project showcases exceptional door work throughout the property. Our work included designing and crafting custom wooden doors with a variety of finishes to complement the villa interior design. Each door was meticulously constructed to ensure both functionality and aesthetic appeal, enhancing the overall elegance of the residence.',
    });
});

app.get('/gallery', (req, res) => {
    res.render('gallery', { 
        title: 'Our Gallery', 
        header: 'Gallery' ,
        message: 'Explore our collection of stunning images showcasing our work.',
    });
});

app.get('/reviews', (req, res) => {
    res.render('reviews', { 
        title: 'Reviews', 
        header: 'What Our Clients Say' 
    });
});

app.get('/team', (req, res) => {
    res.render('team', { 
        title: 'Our Delicious Gallery', 
        header: 'Meet the Team',
        message: 'Discover the talented individuals behind our success.',
     });
});

app.get('/blog', (req, res) => {
    res.render('blog', { 
        title: 'Design Blog', 
        header: 'Design Blog', 
        message: 'Stay updated with the latest design trends and tips from our experts.' ,
    });
});

app.get('/faq', (req, res) => {
    res.render('faq', { 
        title: 'FAQs', 
        header: 'Frequently Asked Questions',
        message: 'Find answers to common questions about our services and offerings.',
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'Contact Us', 
        header: 'Get in Touch with Us', 
        message: 'We would love to hear from you! Get in touch with us using the form below.',
        email: 'mj.interiordesignstudio@gmail.com', 
        phone: '+962792905439', 
        address: 'An-Nahdah Street, Tariq, Building 30, Amman, Jordan',
    });
});

app.listen(HTTP_PORT, () => {
    console.log(`Server listening on: ${HTTP_PORT}`);
});
