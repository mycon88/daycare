import { Link, Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import ClassSched from '@/Components/ClassSched';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <div className="container mx-auto bg-gray-100 min-h-50vh">
                <div className="bg-[url('/bg.jpg')] bg-cover bg-center h-screen">
                    <div className="container mx-auto p-5 h-full flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-6xl font-bold hover:text-red-500 transition duration-300 cursor-pointer">Welcome to Your Daycare Online Enrollment!</h1>
                            <p className="mt-4 text-2xl text-black w-45 hover:text-purple-500 transition duration-300 cursor-pointer">
                                At Daycare, we understand that choosing the right daycare for your child is one of the most important decisions you'll make. Our mission is to provide a nurturing, safe, and educational environment where your child can thrive.
                            </p>
                            <Link href="/register" className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-red-500 hover:shadow-lg transition duration-300 cursor-pointer">Enroll Now</Link>
                        </div>
                    </div>
                </div>
                <div className="container p-10 mx-auto mt-6 text-center h-screen hover:bg-blue-500">
                    <h2 className="text-2xl font-semibold text-white">Why Choose Us?</h2>
                    <ul className="mt-4 flex flex-col items-center space-y-4">
                        <li className="bg-white p-6 border rounded shadow max-w-xl w-full hover:text-white hover:bg-purple-500 hover:shadow-lg transition duration-300 cursor-pointer">
                            <h1><strong>Experienced Staff:</strong></h1> 
                            <p>Our team of certified professionals is dedicated to fostering a love of learning and ensuring each child's well-being.</p> 
                        </li>
                        <li className="bg-white p-6 border rounded shadow max-w-xl w-full hover:text-white hover:bg-purple-500 hover:shadow-lg transition duration-300 cursor-pointer">
                            <strong>Safe and Secure:</strong> 
                            <p>We prioritize safety with secure facilities and a rigorous check-in/check-out system.</p> 
                        </li>
                        <li className="bg-white p-6 border rounded shadow max-w-xl w-full hover:text-white hover:bg-purple-500 hover:shadow-lg transition duration-300 cursor-pointer">
                            <strong>Enriching Programs:</strong> 
                            <p>From creative arts to early STEM education, our diverse programs are designed to stimulate and inspire young minds.</p> 
                        </li>
                        <li className="bg-white p-6 border rounded shadow max-w-xl w-full hover:text-white hover:bg-purple-500 hover:shadow-lg transition duration-300 cursor-pointer">
                            <strong>Community Focused:</strong> 
                            <p>We believe in building a strong community, partnering with parents, and celebrating the unique qualities of every child.</p> 
                        </li>
                    </ul>
                </div>
            </div>
            <ClassSched />
            <div className="about-page p-8 bg-gray-100">            
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-lg leading-relaxed">
                            At Sunshine Daycare, our mission is to provide a safe, nurturing, and stimulating environment where children can grow, learn, and thrive. We are committed to fostering each child's development and creativity through a balanced blend of structured activities and free play.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
                        <p className="text-lg leading-relaxed">
                            We believe that every child is unique and deserves to be treated with respect and care. Our philosophy centers around creating a supportive and inclusive community where children feel valued and empowered. We emphasize the importance of social, emotional, physical, and cognitive development through play-based learning and positive reinforcement.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Our Programs</h2>
                        <p className="text-lg leading-relaxed">
                            Sunshine Daycare offers a variety of programs tailored to meet the needs of children at different stages of development. From infants to preschoolers, our programs are designed to encourage exploration, discovery, and a love for learning. We offer full-day, half-day, and part-time options to accommodate the diverse needs of our families.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Our Facilities</h2>
                        <p className="text-lg leading-relaxed">
                            Our state-of-the-art facilities are designed with children in mind. We provide spacious, bright, and clean classrooms equipped with age-appropriate toys and learning materials. Our outdoor playground is a safe and fun environment where children can enjoy physical activities and fresh air.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Our Staff</h2>
                        <p className="text-lg leading-relaxed">
                            Our dedicated team of teachers and caregivers are passionate about early childhood education. All staff members are highly qualified and undergo continuous training to stay updated with the latest educational practices. We prioritize building strong relationships with families and believe in open communication to ensure the best care for your child.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-lg leading-relaxed">
                            We would love to hear from you! If you have any questions or would like to schedule a tour, please feel free to contact us at (123) 456-7890 or email us at info@sunshinedaycare.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
        <footer className="bg-gray-800 text-white mt-12">
                <div className="container mx-auto p-6 text-center">
                    <p>&copy; {new Date().getFullYear()} Daycare. All rights reserved.</p>
                    <p className="mt-2">
                        <Link href="/contact" className="underline hover:text-gray-300">Contact Us</Link> | 
                        <Link href="/privacy" className="underline hover:text-gray-300 ml-2">Privacy Policy</Link>
                    </p>
                </div>
            </footer>
        </>
    );
}
