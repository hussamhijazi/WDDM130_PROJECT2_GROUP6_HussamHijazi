const express = require('express');
const path = require('path');
const app = express();
const Sequelize = require("sequelize");

const HTTP_PORT = process.env.PORT || 8080;

// Set up Sequelize for PostgreSQL
const sequelize = new Sequelize("neondb", "neondb_owner", "npg_ky19aGfIFszq", {
    host: "ep-cool-boat-a543rznf-pooler.us-east-2.aws.neon.tech",
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false },
    },
});

sequelize.authenticate()
    .then(() => console.log('Database connected successfully.'))
    .catch(err => console.log('Database connection error:', err));

// Define Project model
const Project = sequelize.define("Project", {
    title: { type: Sequelize.STRING, allowNull: false },
    location: { type: Sequelize.STRING, allowNull: false },
    designer: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.TEXT, allowNull: false },
    image: { type: Sequelize.STRING, allowNull: true }
});

// Define Gallery model
const Gallery = sequelize.define("Gallery", {
    imageUrl: { type: Sequelize.STRING, allowNull: false },
    altText: { type: Sequelize.STRING, allowNull: false }
});

// Define Review model
const Review = sequelize.define("Review", {
    name: { type: Sequelize.STRING, allowNull: false },
    location: { type: Sequelize.STRING, allowNull: true },
    text: { type: Sequelize.TEXT, allowNull: false },
});

// Define TeamMember model
const TeamMember = sequelize.define("TeamMember", {
    name: { type: Sequelize.STRING, allowNull: false },
    title: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.TEXT, allowNull: false },
    image: { type: Sequelize.STRING, allowNull: true }
});

// Define Blog model
const Blog = sequelize.define("Blog", {
    title: { type: Sequelize.STRING, allowNull: false },
    image: { type: Sequelize.STRING, allowNull: false },
    excerpt: { type: Sequelize.TEXT, allowNull: false },
    url: { type: Sequelize.STRING, allowNull: false },
    reactions: { type: Sequelize.INTEGER, defaultValue: 0 } 
});

// Define Contact model
const Contact = sequelize.define("Contact", {
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    message: { type: Sequelize.TEXT, allowNull: false }
});

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// CRUD Routes

// Read all projects
app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.render('projects', { title: 'Projects', projects });
    } catch (error) {
        console.error('Error retrieving projects:', error);
        res.status(500).send('Error retrieving projects');
    }
});

// Create a new project
app.post('/projects', async (req, res) => {
    try {
        await Project.create(req.body);
        console.log("Project added successfully");
        res.redirect('/projects');
    } catch (error) {
        console.error('Error adding project:', error);
        res.status(500).send('Error adding project');
    }
});

// Update a project
app.post('/projects/update/:id', async (req, res) => {
    try {
        await Project.update(req.body, { where: { id: req.params.id } });
        console.log("Project updated successfully");
        res.redirect('/projects');
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).send('Error updating project');
    }
});

// Delete a project
app.post('/projects/delete/:id', async (req, res) => {
    try {
        await Project.destroy({ where: { id: req.params.id } });
        console.log("Project deleted successfully");
        res.redirect('/projects');
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).send('Error deleting project');
    }
});

// Read all Gallery
app.get('/gallery', async (req, res) => {
    try {
        const images = await Gallery.findAll();
        res.render('gallery', { 
            title: 'Gallery',
            header: 'Our Gallery',
            message: 'Browse through our collection of stunning images.',
            images
        });
    } catch (error) {
        console.error('Error retrieving gallery images:', error);
        res.status(500).send('Error retrieving gallery images');
    }
});

// Create a Gallery
app.post('/gallery', async (req, res) => {
    try {
        await Gallery.create(req.body);
        console.log("Image added successfully to gallery");
        res.redirect('/gallery');
    } catch (error) {
        console.error('Error adding gallery image:', error);
        res.status(500).send('Error adding gallery image');
    }
});

// Update a Gallery
app.post('/gallery/update/:id', async (req, res) => {
    try {
        await Gallery.update(req.body, { where: { id: req.params.id } });
        console.log("Gallery image updated successfully");
        res.redirect('/gallery');
    } catch (error) {
        console.error('Error updating gallery image:', error);
        res.status(500).send('Error updating gallery image');
    }
});

// Delete a Gallery
app.post('/gallery/delete/:id', async (req, res) => {
    try {
        await Gallery.destroy({ where: { id: req.params.id } });
        console.log("Gallery image deleted successfully");
        res.redirect('/gallery');
    } catch (error) {
        console.error('Error deleting gallery image:', error);
        res.status(500).send('Error deleting gallery image');
    }
});

// Read all Reviews
app.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.render('reviews', { title: 'Reviews', reviews });
    } catch (error) {
        console.error('Error retrieving reviews:', error);
        res.status(500).send('Error retrieving reviews');
    }
});

// Create a Review
app.post('/reviews', async (req, res) => {
    try {
        await Review.create(req.body);
        console.log("Review added successfully");
        res.redirect('/reviews');
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).send('Error adding review');
    }
});

// Update a Review
app.post('/reviews/update/:id', async (req, res) => {
    try {
        await Review.update(req.body, { where: { id: req.params.id } });
        console.log("Review updated successfully");
        res.redirect('/reviews');
    } catch (error) {
        console.error('Error updating review:', error);
        res.status(500).send('Error updating review');
    }
});

// Delete a Review
app.post('/reviews/delete/:id', async (req, res) => {
    try {
        await Review.destroy({ where: { id: req.params.id } });
        console.log("Review deleted successfully");
        res.redirect('/reviews');
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).send('Error deleting review');
    }
});

// Read all TeamMember
app.get('/team', async (req, res) => {
    try {
        const team = await TeamMember.findAll();
        res.render('team', { title: 'Meet the Team', header: 'Our Team', message: 'Discover the talented individuals behind our success.', team });
    } catch (error) {
        console.error('Error retrieving team members:', error);
        res.status(500).send('Error retrieving team members');
    }
});

// Create a TeamMember
app.post('/team', async (req, res) => {
    try {
        await TeamMember.create(req.body);
        console.log("Team member added successfully");
        res.redirect('/team');
    } catch (error) {
        console.error('Error adding team member:', error);
        res.status(500).send('Error adding team member');
    }
});

// Update a TeamMember
app.post('/team/update/:id', async (req, res) => {
    try {
        await TeamMember.update(req.body, { where: { id: req.params.id } });
        console.log("Team member updated successfully");
        res.redirect('/team');
    } catch (error) {
        console.error('Error updating team member:', error);
        res.status(500).send('Error updating team member');
    }
});

// Delete a TeamMember
app.post('/team/delete/:id', async (req, res) => {
    try {
        await TeamMember.destroy({ where: { id: req.params.id } });
        console.log("Team member deleted successfully");
        res.redirect('/team');
    } catch (error) {
        console.error('Error deleting team member:', error);
        res.status(500).send('Error deleting team member');
    }
});

// Read all Blog
app.get('/blog', async (req, res) => {
    try {
        const blogs = await Blog.findAll();
        res.render('blog', { title: 'Design Blog', header: 'Design Blog', message: 'Stay updated with the latest design trends.', blogs });
    } catch (error) {
        console.error('Error retrieving blogs:', error);
        res.status(500).send('Error retrieving blogs');
    }
});

// Create a Blog
app.post('/blog', async (req, res) => {
    try {
        await Blog.create(req.body);
        console.log("Blog added successfully");
        res.redirect('/blog');
    } catch (error) {
        console.error('Error adding blog:', error);
        res.status(500).send('Error adding blog');
    }
});

// Update a Blog
app.post('/blog/update/:id', async (req, res) => {
    try {
        await Blog.update(req.body, { where: { id: req.params.id } });
        console.log("Blog updated successfully");
        res.redirect('/blog');
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).send('Error updating blog');
    }
});

// Delete a Blog
app.post('/blog/delete/:id', async (req, res) => {
    try {
        await Blog.destroy({ where: { id: req.params.id } });
        console.log("Blog deleted successfully");
        res.redirect('/blog');
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).send('Error deleting blog');
    }
});


// Other Routes
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

sequelize.sync().then(() => {
    app.listen(HTTP_PORT, () => {
        console.log(`Server listening on: ${HTTP_PORT}`);
    });
});

