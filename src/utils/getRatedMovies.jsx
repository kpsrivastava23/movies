export const getRatedMovies = async (email) => {
    try {
      const response = await fetch('https://movies-1-ngpz.onrender.com/user/watchedmovies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });
      if (!response.ok) {
        throw new Error('Network Response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("An error occurred while fetching watched movies:", error);
      throw error;
    }
  };
  