const stories = {
    story1: {
        title: "오후 2시의 고양이",
        content: `
            <p>창가에 햇살이 길게 누운 오후 2시였다. 나른한 공기 속에서 먼지들이 춤을 추고 있었다.</p>
            <p>그 고양이는 언제나 그 시간에 찾아왔다. 마치 약속이라도 한 것처럼, 베란다 난간 위로 사뿐히 내려앉았다. 털은 햇빛을 받아 금색으로 빛났고, 눈동자는 투명한 호박색이었다.</p>
            <p>"안녕, 오늘도 왔구나."</p>
            <p>나는 읽던 책을 덮고 고양이에게 말을 걸었다. 고양이는 대답 대신 꼬리를 살랑이며 나를 바라보았다. 그 눈빛에는 묘한 위로가 담겨 있었다. 아무 말도 하지 않아도, 그저 곁에 있어주는 것만으로도 충분한 그런 위로가.</p>
            <p>우리는 그렇게 한참을 서로 바라보았다. 시간은 멈춘 듯했고, 세상의 소음은 멀어졌다. 오후 2시의 마법이었다.</p>
        `
    },
    story2: {
        title: "비 오는 날의 수채화",
        content: `
            <p>투둑, 투둑. 창문을 두드리는 빗소리에 잠에서 깼다. 회색빛 하늘이 방 안을 가득 채우고 있었다.</p>
            <p>우산을 쓰고 거리로 나갔다. 빗물에 젖은 아스팔트는 짙은 검은색으로 변해 있었고, 가로수 잎들은 더욱 선명한 초록빛을 띠고 있었다. 마치 누군가 세상에 물감을 덧칠한 것 같았다.</p>
            <p>카페에 앉아 따뜻한 커피를 주문했다. 김이 모락모락 피어오르는 커피 잔 너머로, 빗속을 걸어가는 사람들의 모습이 보였다. 빨강, 노랑, 파랑... 형형색색의 우산들이 꽃처럼 피어났다.</p>
            <p>비 오는 날은 세상이 수채화처럼 번진다. 경계가 흐릿해지고, 모든 것이 부드러워진다. 나는 그 흐릿함이 좋았다. 잠시나마 선명해야 한다는 강박에서 벗어날 수 있었으니까.</p>
        `
    },
    story3: {
        title: "기억의 조각들",
        content: `
            <p>오래된 서랍을 정리하다가 낡은 사진 한 장을 발견했다. 빛바랜 사진 속에는 어린 시절의 내가 환하게 웃고 있었다.</p>
            <p>그때는 세상이 참 넓고 신기했다. 골목길은 미지의 탐험지였고, 놀이터는 거대한 성이었다. 친구들과 함께라면 무엇이든 할 수 있을 것 같았다.</p>
            <p>사진을 가만히 들여다보니, 잊고 있었던 기억들이 하나둘 떠올랐다. 솜사탕의 달콤한 냄새, 흙장난을 치던 손의 감촉, 해 질 녘 엄마가 부르던 목소리...</p>
            <p>기억은 사라지는 것이 아니라, 마음 한구석에 조용히 숨어 있는 것일지도 모른다. 우리가 다시 찾아와 주기를 기다리면서. 나는 사진을 다시 서랍 깊숙이 넣었다. 언젠가 다시 꺼내볼 날을 기약하며.</p>
        `
    },
    story4: {
        title: "달빛 산책",
        content: `
            <p>잠이 오지 않는 밤이면 나는 달빛을 따라 걷는다. 밤의 공기는 차갑지만 상쾌하다.</p>
            <p>가로등이 드문드문 켜진 길을 따라 걷다 보면, 낮에는 보이지 않던 것들이 보인다. 그림자의 길이, 나뭇잎이 흔들리는 소리, 그리고 밤하늘에 총총히 박힌 별들.</p>
            <p>달은 언제나 묵묵히 나를 따라온다. 때로는 친구처럼, 때로는 감시자처럼. 하지만 그 빛은 결코 나를 재촉하지 않는다. 그저 내가 걷는 길을 은은하게 비춰줄 뿐이다.</p>
            <p>달빛 아래서는 모든 고민이 작아진다. 거대한 우주 앞에서 나의 걱정은 먼지처럼 가볍게 느껴진다. 그래서 나는 오늘 밤도 걷는다. 달빛이 이끄는 대로.</p>
        `
    },
    story5: {
        title: "첫눈이 오면",
        content: `
            <p>일기예보에서 첫눈 소식이 들려왔다. 나는 괜히 마음이 설레어 창밖을 자꾸만 내다보았다.</p>
            <p>첫눈이 오면 만나기로 했던 약속. 그 약속은 아직 유효할까? 계절이 몇 번이나 바뀌었지만, 나는 여전히 그 겨울에 머물러 있는 기분이었다.</p>
            <p>하얀 눈송이가 하나둘 떨어지기 시작했다. 세상은 금세 하얗게 변해갔다. 나는 코트를 챙겨 입고 밖으로 나갔다. 차가운 공기가 뺨을 스쳤지만 춥지 않았다.</p>
            <p>약속 장소에는 아무도 없었다. 하지만 실망하지 않았다. 하얀 눈이 내리는 풍경만으로도 충분히 아름다웠으니까. 그리고 어쩌면, 이 눈이 그 사람에게도 닿고 있을 테니까.</p>
        `
    }
};

function openBook(storyId) {
    const modal = document.getElementById('book-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    const story = stories[storyId];

    if (story) {
        title.textContent = story.title;
        body.innerHTML = story.content;
        modal.hidden = false;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeBook() {
    const modal = document.getElementById('book-modal');
    modal.hidden = true;
    document.body.style.overflow = '';
}

// Close modal when clicking outside content
document.getElementById('book-modal').addEventListener('click', (e) => {
    if (e.target.id === 'book-modal') {
        closeBook();
    }
});

// Add random slight rotation to books for realism
document.querySelectorAll('.book').forEach(book => {
    const randomRot = (Math.random() - 0.5) * 2; // -1 to 1 degree
    book.style.transform = `rotate(${randomRot}deg)`;
});
