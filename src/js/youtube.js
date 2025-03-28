
// YouTube channel data and functionality

document.addEventListener('DOMContentLoaded', function() {
  // Sample YouTube videos data (would be fetched from an API in a real application)
  const videosData = [
    {
      id: 1,
      title: "Getting Started with Google Cloud Platform",
      thumbnail: "../assets/images/video-thumb1.jpg",
      duration: "12:34",
      date: "March 15, 2024",
      url: "https://www.youtube.com/@codewithtechhack"
    },
    {
      id: 2,
      title: "Cloud Functions Tutorial for Beginners",
      thumbnail: "../assets/images/video-thumb2.jpg",
      duration: "15:22",
      date: "March 10, 2024",
      url: "https://www.youtube.com/@codewithtechhack"
    },
    {
      id: 3,
      title: "Firebase Authentication in 10 Minutes",
      thumbnail: "../assets/images/video-thumb3.jpg",
      duration: "10:45",
      date: "March 5, 2024",
      url: "https://www.youtube.com/@codewithtechhack"
    },
    {
      id: 4,
      title: "Deploying Your First App to Google Cloud",
      thumbnail: "../assets/images/video-thumb4.jpg",
      duration: "18:30",
      date: "February 28, 2024",
      url: "https://www.youtube.com/@codewithtechhack"
    },
    {
      id: 5,
      title: "BigQuery for Data Analysis",
      thumbnail: "../assets/images/video-thumb5.jpg",
      duration: "14:15",
      date: "February 20, 2024",
      url: "https://www.youtube.com/@codewithtechhack"
    },
    {
      id: 6,
      title: "Cloud Storage Best Practices",
      thumbnail: "../assets/images/video-thumb6.jpg",
      duration: "11:50",
      date: "February 15, 2024",
      url: "https://www.youtube.com/@codewithtechhack"
    }
  ];
  
  // Function to populate the video grid
  function populateVideos() {
    const videoGrid = document.querySelector('.video-grid');
    if (!videoGrid) return;
    
    // Clear existing content
    videoGrid.innerHTML = '';
    
    // Add each video card
    videosData.forEach((video, index) => {
      const videoCard = document.createElement('div');
      videoCard.classList.add('video-card', 'fade-in');
      
      videoCard.innerHTML = `
        <a href="${video.url}" target="_blank">
          <div class="video-thumbnail" style="background-image: url('${video.thumbnail}')">
            <div class="video-duration">${video.duration}</div>
          </div>
          <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <div class="video-date">${video.date}</div>
          </div>
        </a>
      `;
      
      videoGrid.appendChild(videoCard);
      
      // Add animation delay for staggered appearance
      setTimeout(() => {
        videoCard.classList.add('active');
      }, index * 150);
    });
  }
  
  // Initialize videos
  populateVideos();
});
