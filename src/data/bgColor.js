// // weatherId: OpenWeather 코드
// export const getColorByWeatherId = (weatherId) => {
//     // 800 (맑음): 단순 노랑 대신, 맑은 하늘에서 햇살이 퍼지는 느낌
//     if (weatherId === 800) {
//        return 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
//     }

//     const group = Math.floor(weatherId / 100); // 2,3,5,6,7,8...

//     switch (group) {
//         case 2: // 뇌우: 깊고 어두운 밤하늘 + 번개 느낌의 보라색 포인트
//             return 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)';
//             // 또는 좀 더 강렬한 느낌:
//             // return 'linear-gradient(135deg, #141E30 0%, #243B55 50%, #5953cdff 100%)';
//         case 3: // 이슬비: 촉촉하고 가벼운 하늘색
//             return 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)';
//         case 5: // 비: 비에 젖은 도시의 차분하고 깊은 블루-그레이
//             return 'linear-gradient(to bottom, #3a6073, #16222A)';
//         case 6: // 눈: 차갑고 깨끗한 화이트-아이스 블루
//             return 'linear-gradient(to top, #dfe9f3 0%, white 100%)';
//         case 7: // 안개/먼지: 앞이 안 보이는 몽환적이고 탁한 느낌
//             return 'linear-gradient(to bottom, #8e9eab, #eef2f3)';
//         case 8: // 구름: 흐린 날의 무겁고 층진 구름
//             return 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)';
//         default: // 예외: 무난한 그레이톤
//             return 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
//     }
// };


// bgColor.js (방법 B: 이미지 URL 버전)

export const getBackgroundWeather = (weatherId) => {
    let imageUrl = '';
    // 기본 그라데이션 (이미지 로딩 전이나 에러 시 대비)
    let fallbackColor = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';

    if (weatherId === 800) {
        // 맑음 (Sunny)
        imageUrl = 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1974&auto=format&fit=crop';
        fallbackColor = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
    } else {
        const group = Math.floor(weatherId / 100);
        switch (group) {
            case 2: // 뇌우 (Thunderstorm)
                imageUrl = 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=2071&auto=format&fit=crop';
                fallbackColor = 'linear-gradient(to bottom, #0f2027, #2c5364)';
                break;
            case 3: // 이슬비 (Drizzle - 가벼운 비 느낌)
            case 5: // 비 (Rain)
                imageUrl = 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop';
                fallbackColor = 'linear-gradient(to bottom, #3a6073, #16222A)';
                break;
            case 6: // 눈 (Snow)
                imageUrl = 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=2108&auto=format&fit=crop';
                fallbackColor = 'linear-gradient(to top, #dfe9f3 0%, white 100%)';
                break;
            case 7: // 안개 (Atmosphere)
                imageUrl = 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=1928&auto=format&fit=crop';
                fallbackColor = 'linear-gradient(to bottom, #8e9eab, #eef2f3)';
                break;
            case 8: // 구름 (Clouds)
                imageUrl = 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop';
                fallbackColor = 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)';
                break;
            default:
                break;
        }
    }

    // 이미지 URL과 대비용 색상을 객체로 반환
    return { imageUrl, fallbackColor };
};