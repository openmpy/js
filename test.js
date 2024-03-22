async function signIn() {
    const url = 'https://www.openmpy.com/api/v1/members/signin';
    const data = {
        username: "test@test.com",
        password: "test123!"
    };

    try {
        const response = await fetch(url, {
            method: 'POST', // 요청 방식 설정
            headers: {
                'Content-Type': 'application/json' // 보내는 데이터의 컨텐츠 유형
            },
            credentials: 'include',
            body: JSON.stringify(data) // JavaScript 객체를 JSON 문자열로 변환
        });

        if (!response.ok) {
            throw new Error('Request failed with status ' + response.status);
        }

        const result = await response.json(); // 응답 본문을 JSON으로 파싱
        console.log(result); // 결과 출력
    } catch (error) {
        console.error('Error during the fetch operation: ', error);
    }
}

signIn(); // 함수 호출

// async function logout() {
//     const url = 'http://hanghae-4.ap-northeast-2.elasticbeanstalk.com/api/v1/members/logout';

//     try {
//         const response = await fetch(url, {
//             method: 'POST', // 요청 방식 설정
//             headers: {
//                 'Accept': '*/*', // 서버가 응답할 수 있는 컨텐츠 유형
//                 'Content-Type': 'application/json' // 보내는 데이터의 컨텐츠 유형
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Request failed with status ' + response.status);
//         }

//         const result = await response.json(); // 응답 본문을 JSON으로 파싱
//         console.log(result); // 결과 출력
//     } catch (error) {
//         console.error('Error during the fetch operation: ', error);
//     }
// }

// logout();


// async function ping() {
//     const url = 'http://localhost:8080/cookie';

//     try {
//         const response = await fetch(url, {
//             method: 'GET', // 요청 방식 설정
//             headers: {
//                 'Accept': '*/*', // 서버가 응답할 수 있는 컨텐츠 유형
//                 'Content-Type': 'application/json' // 보내는 데이터의 컨텐츠 유형
//             },
//             credentials: 'include'
//         });

//         if (!response.ok) {
//             throw new Error('Request failed with status ' + response.status);
//         }

//         // const result = await response.json(); // 응답 본문을 JSON으로 파싱
//         // console.log(result); // 결과 출력
//     } catch (error) {
//         console.error('Error during the fetch operation: ', error);
//     }
// }

// ping();
