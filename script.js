
        // Indian travel places with fixed image URLs
        const places = [
            {
                id: 1,
                name: "Taj Mahal, Agra",
                desc: "The iconic white marble monument of love, one of the Seven Wonders of the World",
                img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?fit=crop&w=400&h=250&q=80",
                price: "₹4,999"
            },
            {
                id: 2,
                name: "Goa Beaches",
                desc: "Beautiful beaches, Portuguese architecture, and vibrant nightlife",
                img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?fit=crop&w=400&h=250&q=80",
                price: "₹8,499"
            },
            {
                id: 3,
                name: "Kerala Backwaters",
                desc: "Serene houseboat journeys through palm-fringed canals",
                img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?fit=crop&w=400&h=250&q=80",
                price: "₹12,999"
            },
            {
                id: 4,
                name: "Jaipur, Rajasthan",
                desc: "The Pink City with magnificent forts, palaces, and colorful markets",
                img: "https://images.unsplash.com/photo-1621403118373-889388c74402?fit=crop&w=400&h=250&q=80",
                price: "₹6,499"
            },
            {
                id: 5,
                name: "Ladakh Mountains",
                desc: "Breathtaking Himalayan landscapes and Buddhist monasteries",
                img: "https://images.unsplash.com/photo-1585504231057-6d0d4bdcb9c3?fit=crop&w=400&h=250&q=80",
                price: "₹15,999"
            },
            {
                id: 6,
                name: "Varanasi Ghats",
                desc: "Spiritual city on the banks of the holy Ganges River",
                img: "https://images.unsplash.com/photo-1565955884282-c6bb7d201754?fit=crop&w=400&h=250&q=80",
                price: "₹5,499"
            }
        ];
        
        // Default images in case Unsplash fails
        const defaultImages = {
            1: "https://images.unsplash.com/photo-1564507592333-c60657eea523?fit=crop&w=400&h=250&q=80",
            2: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?fit=crop&w=400&h=250&q=80",
            3: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?fit=crop&w=400&h=250&q=80",
            4: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?fit=crop&w=400&h=250&q=80",
            5: "https://images.unsplash.com/photo-1585504231057-6d0d4bdcb9c3?fit=crop&w=400&h=250&q=80",
            6: "https://images.unsplash.com/photo-1565955884282-c6bb7d201754?fit=crop&w=400&h=250&q=80"
        };
        
        // Load places when page loads
        window.onload = function() {
            showPlaces(places);
        };
        
        // Function to display places
        function showPlaces(placesArray) {
            const container = document.getElementById('places-container');
            container.innerHTML = '';
            
            placesArray.forEach(place => {
                // Use default image as backup
                const imageSrc = place.img || defaultImages[place.id];
                
                const card = `
                    <div class="place-card">
                        <img src="${imageSrc}" 
                             alt="${place.name}" 
                             class="place-img"
                             onerror="this.src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?fit=crop&w=400&h=250&q=80'">
                        <div class="place-info">
                            <h3>${place.name}</h3>
                            <p>${place.desc}</p>
                            <div class="price">From ${place.price}</div>
                            <button class="book-btn" onclick="bookPlace(${place.id})">
                                Book Now
                            </button>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });
        }
        
        // Search function
        function searchPlaces() {
            const searchText = document.getElementById('search').value.toLowerCase();
            
            if (!searchText) {
                showPlaces(places);
                return;
            }
            
            const filtered = places.filter(place => 
                place.name.toLowerCase().includes(searchText) || 
                place.desc.toLowerCase().includes(searchText)
            );
            
            if (filtered.length === 0) {
                alert(`No places found for "${searchText}". Showing all destinations.`);
                showPlaces(places);
            } else {
                showPlaces(filtered);
            }
        }
        
        // Book a place
        function bookPlace(id) {
            const place = places.find(p => p.id === id);
            if (place) {
                alert(`Booking: ${place.name}\nPrice: ${place.price}\n\nWe'll contact you within 24 hours to confirm your booking!`);
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        
        // Subscribe to newsletter
        function subscribe() {
            const email = document.getElementById('email').value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!email) {
                alert("Please enter your email address");
                return;
            }
            
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address");
                return;
            }
            
            alert(`Thank you for subscribing!\nWe'll send travel updates to: ${email}`);
            document.getElementById('email').value = '';
        }
        
        // Press Enter to search
        document.getElementById('search').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchPlaces();
            }
        });
        
        // Press Enter in email field
        document.getElementById('email').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribe();
            }
        });
        
        // Smooth scrolling for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Add some interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover effect to cards
            const cards = document.querySelectorAll('.place-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });
