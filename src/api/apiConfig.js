const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '10d845a1ce44f26a6eb0d1b02d54b342',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;