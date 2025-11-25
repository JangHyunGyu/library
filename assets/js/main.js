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
    },
    story_p: {
        title: "P에 대하여",
        content: `
            <div class="story-part">
                <h4>-1부-</h4>
                <h5>[취향의 밤]</h5>
                <p>은근한 간접조명에만 기대고 있는 어두운 거실.<br>
                근사한 음질을 자랑하는 스피커 밖으로 음악이 흐르고, 테이블 위에는 와인이 놓여 있었다.<br>
                그 공간 틈틈을 채우고 있는 소품 하나, 도구 하나까지 허투루 장만한 게 아니라는 생각이 들었다.<br>
                상남자 같은 외형과 상반되는 P의 미적 취향에 나도 모르게 웃음이 났다.</p>
                
                <p>남자 혼자 사는 집에 어쩌다 내 취향의 것들이 그렇게 모여 있었을까.<br>
                그날 밤, 문득 그가 떠올라 연락했다.<br>
                비슷한 취향을 가진 이성과 아무 의도 없이 시간을 보내고 싶었던 것도 사실이다.<br>
                그립다는 감정까지는 아니었지만 그 공간 속으로 성큼 들어서고 싶었다.<br>
                그땐 몰랐다. 그 후로 우리가 서로에게 어떤 의미가 될지.</p>

                <p>오랜만이라 조금 어색했지만 부담은 없었다.<br>
                ‘난 그냥 즐기러 온 거야.’ 그때의 나는 그랬다.</p>

                <p>“그동안 지방 근무를 오래 했어. 대부분 그렇겠지만… 우리 업계도 쉽진 않더라.<br>
                잘 지냈어? 일단 좀 먹자. 와인 괜찮지? 가성비 좋은 칠레산 와인 꺼내놨어.”</p>

                <p>1년여의 시간이 무색하리만큼 그는 친근했고, 오랜만에 만난 ‘나’여서인지, 혹은 사람과의 사적인 만남 자체가 오랜만이어서인지, 그동안의 빈 시간을 가득 메우듯 이야기들이 쏟아졌다.<br>
                뭔가 해소되는 듯 후련해보이는 그의 표정과 음성, 보물창고처럼 계속 뭔가 나오는 냉장고에서 부지런히 꺼내지는 안주들과 와인.</p>

                <p>편안했지만, 이야기가 끊길 때면 어색한 공기가 스치기도 했다.<br>
                아마 나는 ‘취향의 시간’ 속에서 완전히 즐기지는 못하고 있었던 것 같다.<br>
                머릿속을 떠다니는 잡념들과 현실의 무게. ‘여기서 뭘 하고 있지?’ 같은 짧은 현타까지.<br>
                이제 정말 P에게 난 사심 같은 건 없구나 하는 생각이 스쳤다.</p>

                <p>아무렴 어떤가. 그와 나의 취향이 깃든 이 분위기 자체에 내 감각을 열면 되는 거지.</p>

                <p>“뭐 좀 더 먹을래? … 왜 그렇게 떨어져 있어 ㅋ”<br>
                P가 우물쭈물하며 말을 내뱉던 그 순간, 나는 그와 멀찌감치 떨어져 소파 끝에 붙어 앉아 있다는 걸 그제야 눈치챘다.<br>
                나도 모르게 웃음이 났다. 그가 한숨처럼 내뱉었다.</p>

                <p>“하… 나 왜 이렇게 바보 같지.”<br>
                “왜에 ㅋ 뭐 얘기하려고 했어?”</p>

                <p>장난기 섞인 말이 자연스레 튀어나왔다.<br>
                그리고 아주 자연스럽게, “좀 누울까?”라는 말을 건냈다.<br>
                (어색하게 떨어져 앉아 있어놓고 좀 누울까라니 ,,, ㅋㅋ)</p>

                <p>그건 계산된 신호도, 용기 낸 고백도 아니었다.<br>
                그냥 어색한 순간을 풀고 싶은 마음, 그리고 괜찮아, 가까워져도 돼 라는 가벼운 허락 같은 거였다.</p>

                <p>P가 잠시 멈칫하더니 “그래도 돼?”라고 조심스레 되물었다.<br>
                나는 속으로 ‘뭐야 이 귀여운 바보는 ..’했지만 그의 한마디가 그날 밤의 분위기를 한 번 더 부드럽게 만들어주었다.</p>

                <p>P의 넓은 침대 위에 누웠을 때, 거실에서부터 들려오는 음악이 조용한 강처럼 흘렀다.<br>
                둘 다 말은 멈추지 않았지만 대화보다 더 또렷한 건 서로에게 스며드는 공기였다.<br>
                그는 늘 그렇듯 조심스러웠다. 가까워지면서도, 또 멈칫하며 나를 확인하는 눈빛.<br>
                그 느린 리듬이 이상하게 편안하면서도 조금은 애틋했다.</p>

                <p>“요즘은 어때?”<br>
                그가 툭 던진 질문 하나에 나는 내 삶의 무게까지 잠시 내려놓는 기분이 들었다.<br>
                말없이 마음이 풀리는 밤이 있었다면 아마 이런 종류였을 것이다.<br>
                그의 온도는 단단하면서 따뜻했고, 내 온도는 조용히 뜨거웠다.<br>
                서로 다른 결이었지만 그 차이가 어긋나지 않고 자연스럽게 맞물리는 순간들이었다.</p>

                <p>그 밤은 어떤 결정도, 명확한 시작도 아니었다.<br>
                그저 우리 둘의 취향이 한 방향으로 기울어진 시간.<br>
                말보다 숨결이 더 많은 의미를 가진 밤.</p>

                <h5>[헷갈리는 이성]</h5>
                <p>두 달이 흘렀다.<br>
                정신없이 일상을 보내던 와중에도 문득 그 밤이 떠오를 때가 있었다.<br>
                오랜만에 본 그날의 P, 예상외로 애틋했던 시간들, 그리고 나를 헷갈리게 만든 그의 말들.</p>

                <p>“나 왜 이렇게 바보 같지.”<br>
                “근데 왜 이렇게 예쁜 거야.”</p>

                <p>그 말들을 나도 모르게 자꾸 곱씹었다.<br>
                생각보다 더 많은 시간을 보내고도 아쉬움 가득한 말투로 집에 돌아가던 나에게 “잘 가고 있어?” 하고 전화를 걸어 확인하던 P.<br>
                그 후로는 우리 둘 다 아무 연락을 하지 않았고 그렇게 두어 달이 지나버렸다.</p>

                <p>‘그래… 뭐. 그 날 잘 놀다 온 거지 뭐.’<br>
                하면서도 ‘왜 사람 헷갈리게 만들어?’ 이런 푸념이 슬쩍 올라왔다.<br>
                ‘아니, 오랜만에 내가 먼저 연락해서 갔으면 그다음엔 자기가 먼저 좀 연락해주면 안 되나?’</p>

                <p>혼자 울그락불그락하다가도 다시 생각해보면, 나는 그저 그와 함께하는 시간과 공간에서 취향을 즐기러 간 거지 그가 그립거나 다시 이성 관계가 되고 싶어서 간 건 아니었다.<br>
                ‘오버하지 말자. 그냥 그 밤은 분위기가 그랬던 거지 뭐.’</p>

                <p>평소의 나라면 이도저도 아닌 상황, 먼저 다가오지 않는 남자에게 절대 연락하는 법이 없는데.<br>
                하지만 P는… 연인이 아니라는 마음으로 다시 연락했다.<br>
                정말 아무렇지 않은 듯, “나 또 놀러 가도 돼?”라고.<br>
                ㅋㅋ…</p>

                <p>그의 답은 명쾌했다. “좋아”<br>
                사실은 보낼까 말까, 수없이 망설이다가 눌렀던 메시지였다.<br>
                짧고 명쾌한 P의 대답은 살짝 허무하면서도 이상하게 좋았다.</p>

                <p>그렇게 비슷한 밤들이 한동안 반복됐다.<br>
                어떤 정의도, 어떤 규칙도 없는 불안정한 패턴 속에서 우리가 보낸 시간들은 그래도 꽤 낭만적이었다.<br>
                그런데 집으로 돌아오고 나면 다시 기약이 없는 것이 점점 혼란스러워졌다.<br>
                그저 즐기기엔 편하지 않고, 그렇다고 진지하게 생각하자니 그와 나 사이에 연결점이 없는 것 같았다.<br>
                마치 와이파이 신호가 언제 끊길지 모르는 상태에서 내가 좋아하는 게임을 하고 있는 기분.</p>

                <p>지나고 보니 P는 나를 좋아했지만 관계의 정의는 어려웠던 것 같다.<br>
                그저 오래 보고 싶다는 마음은 내비쳤지만 나는 아무 말도 할 수가 없었다.<br>
                누구에게나 연인의 ‘처음’은 나름의 범주가 있는데 우리는 그 범주 어디에도 속하지 않았다.<br>
                물론 그와의 만남 자체가 이번이 처음은 아니지만 그래도 연인같은 만남 2막은 처음인데 ..</p>

                <p>부담 없이, 아무 생각 없이 즐겁게 보자고 다시 만나기 시작한 P였지만 또 생각이 많아지고, 고민이 늘어나고, 없던 방해 요소들이 내 마음속에서 불쑥불쑥 올라왔다.<br>
                ‘P가 어떻게 생각하든 나는 내 중심을 잡아야 해….’</p>

                <h5>[삶 속에서]</h5>
                <p>잠깐, 최근 몇 년 사이의 내 삶을 말해보자면 겉모습은 그대로였지만 그 안에서는 수많은 변화와 문제와 변수가 쏟아졌다.<br>
                풀리지 않는 현실적 어려움 속에서 생각하고 버티고 발버둥 치다 지쳐 쓰러져 겨우 잠들던 날들이었다.</p>

                <p>그럼에도 불구하고 나는 내 삶도, 나 자신도 사랑했다.<br>
                혼자 울기도 셀 수 없이 많았지만 웃음을 잃지는 않았고 망상에 가까운 희망도 늘 품고 있었다.<br>
                그렇지만 어떤 순간에는 모든 것 앞에서 항복하고 싶은 마음도 들었다.<br>
                그런 시간들은 P를 다시 만난 후에도 위태롭게 계속되었다.</p>

                <p>‘나는 내 삶도 제대로 감당 못하면서 어떻게 P를 만날 생각을 했지?’<br>
                ‘그래, 그저… 잠시 숨 쉴 곳을 찾은 건 아닐까.나는 자신이 없다.’</p>

                <p>P와 함께 있지 않은 시간들 속에서 그를 떠올리면 나는 한없이 초라해지곤 했다.<br>
                그래서 더 이상 그를 기다리지도, 연락하지도 않은 시간들도 있었다.<br>
                지금 내게 의미 있는 것은 힘들어도 지켜야 할 나의 삶이었으니까.</p>

                <p>P와 함께 있으면 내가 조금 더 완성되는 느낌이 있었지만, 그 없이 살아가는 내 삶 속의 나는 스스로 견디기 힘들 정도로 쉽게 무너졌다.<br>
                가족들 앞에서도, 사람들 앞에서도, 그리고 P 앞에서는 더더욱 아무렇지 않아야 한다는 강박이 한동안 나를 짓눌렀다.<br>
                어쩌면 그 마음이 1년의 절반 이상은 지배하고 있었을지도 모른다.</p>

                <p>P는 아마 ‘도대체 왜?’라고 물을 것 같다.<br>
                그에게 힘듦이란 절대적인 빈곤이나 물리적 고통 같은 것일 테니까.<br>
                겉으로 멀쩡해 보이는 나를 이해하기는 쉽지 않았을 것이다.</p>

                <p>P는 거의 반평생을 바쳐 자신의 분야에서 일해왔다. 그리고 여전히 그의 중심에는 일이 있다.<br>
                그가 그 일에 얼마나 진심이고, 얼마나 사랑하는지 지켜보기만 해도 알 수 있었다.<br>
                나는 그런 사람들을 진심으로 존경한다. 한 방향으로 오래, 묵직하게, 끝까지 가는 사람들.</p>

                <p>문득 생각했다. 나는 그런 게 없다고 늘 여겨왔는데…<br>
                돌아보면 내 삶 자체가 어쩌면 나만의 “일(Work)”이었는지도 모른다.<br>
                조금은 난이도 있고, 가끔은 지긋지긋해서 던져버리고 싶다가도 결국 다시 돌아오게 만드는… 놓을 수 없는 나의 삶.</p>

                <p>사랑하는 내 삶.<br>
                나는 나를 더 존경해야 함을 느낀다.<br>
                울컥하며 P를 떠올리곤 했다.</p>
            </div>

            <div class="story-part">
                <h4>-2부-</h4>
                <h5>[그럼에도 불구하고]</h5>
                <p>짧든 길든 텀을 두고 만나던 우리는, 한동안 그 텀이 유난히 길어졌었다.<br>
                평소에 연락을 거의 하지 않았고 누구 하나 먼저 연락하면 그때 만나곤 했으니 침묵이 길어진 게 이상한 일은 아니었지만 다시 만날일은 없을것만 같이 긴 시간이었다.</p>

                <p>그 무렵 P는 다시 다른 지방에서 일하고 있었고 나는 정서적으로 유난히 힘든 시기를 지나고 있었다.<br>
                아마 내 예민함이 나도 모르게 그에게 새어 나갔을 거고, P 역시 달라진 환경과 장거리를 오가는것에 피로가 쌓여 있었을 것이다.<br>
                자연스러운 거리감 이었지만 마음도 멀어진듯 각자의 시간을 흘려보냈다.</p>

                <p>하지만 나는 예민함의 끝에서 “다 부질없다”는 생각만으로 하루를 버티고 있었다.<br>
                지나고 보면, 이때부터 내 삶의 많은 부분이 조용히 재정렬되고 있었던 것 같다.<br>
                붙잡고 있던 것들을 하나씩 떼어내며 ‘어떻게 살아야 하는가’라는 질문이 어느 때보다 절실해진 시기였다.</p>

                <p>그도 그럴것이, 해가 바뀌면서 한 가지 진실이 내 가슴속에 날카롭게 박혀 떠나지 않았다.<br>
                모든 게 변해도, 인생이 단 한 번뿐이라는 사실만은 변하지 않는다는 것</p>

                <p>현실의 책임감 아래 눌려 살던 나는 정작 나 자신에 대한 고민은 늘 뒷전이었다.<br>
                내 삶을 다시 세워야 한다는 걸 알고 있었지만 왜인지 자꾸만 텅 빈 느낌이 들었다.<br>
                그럴 때마다 되풀이하듯 P를 떠올렸다. 만나지못한 시간이 한참 지난뒤 나는 다시 다 내려놓고 ,, ‘아무 생각말고 연락해볼까?’ 생각했다.</p>

                <p>어느 날, 여러 지인들과 북적이는 자리에 있었지만 어느 것 하나 마음에 와닿지 않았다.<br>
                몇 시간 동안 ‘P에게 연락할까 말까’만 생각하며 앉아 있었다.<br>
                나를 그 자리에 데려온 지인은 말도 없이 수척해진 내 얼굴을 보며 연신 미안해했다.</p>

                <p>그래, 고민의 끝에는 결과가 있어야 한다.<br>
                나는 결국 P에게 메시지를 보냈다. 답장은 쉽게 오지 않았지만 기다리는 시간은 오히려 고민이 덜어지는 기분이었다.<br>
                그리고 한참 뒤 너무 아무렇지 않은 투의 답장이 도착했다.<br>
                마치 어제까지 대화를 나누던 사람처럼 ,,</p>

                <p>다행히 그는 집이었고 지방에서 운전해 막 도착한 뒤 피곤에 지쳐 멈춘 상태였다.<br>
                업무와 개인 영업으로 너무 지쳐 있었다는 투정 섞인 메시지가 뒤따라왔다.<br>
                나는 뭐라고 답해야 할지 몰라 잠시 멈춰 있었는데 갑자기 그의 전화가 울렸다.<br>
                여전한 P의 음성. 나에게만은 숨김없이 피로를 털어놓는 그 말투.<br>
                그리고, 정말 듣고 싶었던 말이 흘러나왔다.</p>

                <p>“지금 볼 수 있어?”</p>

                <p>내가 먼저 보고 싶다고 보내긴 했지만 그게 지금 당장 보자는 뜻은 아니었다.<br>
                너무 늦은 시간이었고 이렇게 수척한 모습으로 오랜만에 그를 마주하고 싶지 않았다.<br>
                …그럼에도 불구하고</p>

                <p>나는 북적이는 사람들 사이에서 빠져나왔다. 택시는 잡히지 않았고 앱을 통해 부르는 택시도 응답이 없었다.<br>
                그래서 뛰었다. 택시가 잡힐 만한 곳까지, 무작정, 숨이 차오르도록..<br>
                왜인지 모르겠다. 다시 연락한 이유도, 왜 그렇게 빨리 뛰어야만 했는지도 모르겠다.<br>
                데리러 오는 것도 아닌 그에게…<br>
                그럼에도 불구하고, 나는 뛰어야만 했다.<br>
                빨리 그에게 닿고 싶었다.<br>
                고민의 끝에는 언제나 결과가 있어야만 하니까.</p>

                <h5>[관계의 모니터링]</h5>
                <p>‘그럼에도 불구하고’라는 말은 P와의 만남에서 늘 결정적인 순간을 연결하는 다리였다.<br>
                만나지 않아야 할 이유들과,그럼에도 불구하고 만나게 되는 마음 사이를 잇는 튼튼한 다리.</p>

                <p>P는 누군가와 관계를 맺고 그 사이에서 에너지를 나눌 정서적 체력이 거의 없던 사람이다.<br>
                특히 ‘나’라는 변수를 감당하기엔 그의 생활은 너무 간결했고, 습관이된 규칙과 안전망으로 단단히 묶인 구조여서 관계는 곧 그에게 리스크였다.<br>
                결은 다르지만 나에게도 P와 진지한 연인 , 더 깊은 관계가 된다는 것은 두려운 일이기도 하고 와닿지 않는 일이었다. 우리는 이미 좁힐수 없는 서로의 차이를 한 번 겪어봤기에.</p>

                <p>다시 만나고 만남이 지속되면서 P가 처음 “너니까 만나는 거야”라고 했을 때도 나는 그 말을 믿지 않았다.<br>
                그냥 말해본 말 같았다.</p>

                <p>그런데 그와 시간을 보내면서 알게 됐다. P는 ‘그냥 하는 말’이 거의 없는 사람이라는 걸.<br>
                오히려 지나칠 정도로 솔직했고, 말에 과장도, 허세도 없었다.<br>
                그는 ‘그럼에도 불구하고’ 하고픈 것들이 인생에 있어서 진짜였다’며 통찰 깃든 얘기를 했었다. 그리고 나를 만나는 것도 그 중 하나라는 걸 알게되었다</p>

                <p>한때 나는 그가 거의 노력하지 않는다고 생각했다.<br>
                반면 나는 너무 애쓰는 것 같아 속상했다.<br>
                연인인 건 맞는 것 같은데, 우리 만남의 패턴은 내가 알던 ‘애정의 기준’에서는 영 설득력이 부족했다.<br>
                그 기준은 어쩌면 아직도 내 안에서 사라지지 않은 어린 소녀의 사랑일지도 모르겠다.<br>
                P가말했다 “너의 연애는 아직 어리고 나는 늙었다”고</p>

                <p>또한 혼란스러운 가운데 불만스러운 순간마다 논리적으로 설명할 자신이 없었다.<br>
                P에게 어떤 감정적인 서운함의 얘기를 꺼내면 이공계열의 그는 로봇같은 표정으로 “근거는?” “어떤 상황?” “예시를 들어볼래?” 이런 식으로 되물어볼 것만 같았다.<br>
                그는 쉽사리 흥분하거나 목소리를 높이진 않지만 내겐 오히려 더 차갑게 느껴지는 냉정함이었다.<br>
                갈등이 생기면 또 다시 관계를 망칠것만 같은 두려움도 있었기에 나는 조심스러웠고 대신 템포를 늦추고 생각하고 돌아보기 시작했다.</p>

                <p>그렇게 시간이 흐르면서 내 안에 조금씩 변화가 생겼다.<br>
                조용히 기다리다 보면 P가 하는말들에서 그에 대한 힌트들이 많았다.<br>
                (우리는 서로 대화하면서 거의 밤을 지샌적도 더러 있다)<br>
                나는 보고, 듣고, 느끼는 감각이 강한 편인데 상대가 중요할수록 더 깊게 관찰하고 기억한다.<br>
                논리적 분석은 서투르지만, 감각과 체감은 날카로운 편이다.</p>

                <p>그 감각으로 P를 보고 생각하니 어느 순간부터 그가 이해되기 시작했다.<br>
                그는 오랜 시간 스스로를 단련하며 살아온 사람이었다.<br>
                성장도, 강인함도, 중심도 타인에게 기대기보다 자기 자신에게서 끌어올려 온 사람.<br>
                오랜 직장생활과 적지않은 연애경험은 타인에 대한 기대치를 낮출만큼 낮추었는데도 피로감은 나이가들수록 더했다.</p>

                <p>“어린 시절 하던 연애방식의 결과값이 단 하나라도 좋았다면 나도 이렇게 변하진 않았을거야”<br>
                P다운 생각의 방식이 표출되던 말이었다.</p>

                <p>그런 사람이 나와 함께 있을 때만큼은 그래도 내게 집중하는게 느껴졌다.<br>
                나도 그와 보내는 소소한 집데이트가 점점 익숙해졌다.<br>
                그는 나를 맞이하기 전 집을 정돈하고 , 나와 먹을 식사를 준비하고, 내가 좋아하는 커피를 더 맛있게 내려주기위해 생각하며 원두를 고르고 음식에 어울리는 와인을 개봉했다.<br>
                무심해 보이다가도 애정표현은 나보다 적극적이었다.<br>
                이전보다 시간을 내는것이 자연스러웠고 그 시간에 ‘나’를 채우는것에 안정감을 느끼는거 같았다.</p>

                <p>그걸 보면서, 나는 처음과는 다른 방식으로 이 관계를 바라보게 됐다.<br>
                관계는 때로 얼마나 애쓰는가가 아니라, 서로 다른 리듬을 어떻게 받아들이는가의 문제일지도 모른다는 생각이 들었다.</p>
            </div>

            <div class="story-part">
                <h4>-3부-</h4>
                <h5>[사랑의 형태 1 - 조율]</h5>
                <p>P와 나는 비슷한 결을 가진 사람들이지만, 그의 세계에 들어서면서 종종 아주 다른 면들이 드러났다.<br>
                그 차이가 때로는 귀엽고, 때로는 은근히 불편하기도 했다.</p>

                <p>가장 단순한 차이부터 말하자면 — 계절과 실내온도에서 겪는 차이인데 여름이 되면 P의 집은 냉동창고가 아닌가 싶을만큼 에어컨이 풀가동이다.<br>
                한기와 인공바람에 약한 나는 재채기를 달고 콧물을 훔치며 그의 곁에 찰싹 붙어있는다.<br>
                그렇지만 워낙 더위를 많이 타는 그에겐 나 조차도 난로같은 느낌이었는지 내가 오면 평소보다 에어컨을 더 빵빵하게 틀수밖에 없다고 했다.<br>
                “옆에 있으면 왜 이렇게 덥지?” 여름의 그는 힘들어보였다<br>
                그걸 의식하고 떨어졌다 붙었다를 반복하는 나 ㅎ</p>

                <p>식성도 문제였다. P는 평소 식단 관리와 운동을 철저히 하는 사람인데, 나와 있을 때는 일부러 그런 모습을 내려놓았다.<br>
                여자친구에 대한 배려이기도 하겠지만 문제는… 그가 준비하는 음식의 양이 내 용량 기준으로는 항상 과했다.<br>
                P는 “나 혼자서도 먹을 수 있는 양”이라고 했지만, 결국 둘 다 과식하게 되고 와중에 나보다 월등히 많이먹은 P는 식후 몰려오는 피곤함이 보였고 나는 더부룩함을 애써 달래곤 하면서도 남긴 음식을 처리해야만 하는 알수없는 의무감으로 생각도 없는 음식을 먹곤했다.</p>

                <p>“그래도 자기 잘 먹더라”<br>
                그는 내가 잘 먹는다고 생각한다는게 귀여우면서 씁쓸하기도 하다 ㅋ</p>

                <p>생활 방식에서는 더 극명한 차이가 있었다.<br>
                나는 햇빛, 자연, 아웃도어 활동에 대한 활기가 필요한 사람이었고 그는 집돌이고 실내에서 혼자하는 운동을 좋아했다.<br>
                그의 집은 계절이나 시간과 무관하게 늘 밤 10시 분위기였다.<br>
                햇빛을 지독히도 싫어하는 그는 365일 24시간 암막커튼을 쳐놓으니 말이다.</p>

                <p>나는 P가 ‘혹시 흡혈귀 아닐까?’ 라는 상상을했다.<br>
                물론 농담이지만, 내가 잠든 사이에 내 목을 물어 사랑의 피라도 맛봤던 건 아닌가?<br>
                난 그와 그 공간에 매혹되어 그와같은 종족?이 되어가고 있는건 아닌가 싶을때도 있다.</p>

                <p>이런 차이들은 사실 좀 귀여운 편이다.<br>
                한 달에 몇 번 마주치는 사소한 불편일 뿐, 맞추면 그만인데다 나름의 장점들도 있었으니까.<br>
                문제는 다른 곳에 있었다.</p>

                <p>내가 가장 힘들어했던 건 계획형 인간과 즉흥형 인간의 충돌이었다.<br>
                나는 일정과 시간 배분에 민감하고, 생각의 흐름에도 순서가 있었다.<br>
                반면 P는 정해진 회사 일정과 운동 루틴을 제외하고는, ‘그때 그때 하고 싶은 걸’하는 사람이었다.</p>

                <p>그가 말했다. “다른 일정을 미리 정해놓으면 거기에 신경이 쓰여서 '지금 하는 일' 에 몰두가 안돼”<br>
                약속은 미리 정했다가 못맞추게 될 경우를 염려했고 식당 예약 같은건 오늘 다르고 내일 다른게 먹고싶은거라며 수일의 간격을 두고 미리 예약하는 행위 따위를 몹시 싫어했다.</p>

                <p>이러한 성향으로 인해 우리의 만남이 어느정도 비슷한 간격을두고 자연스레 만날때가 되면 만나게되는(이를테면 주말부부같은) 형태가 되기전까진 나는 그와 약속을 잡는게 불편하고 답답했다.<br>
                P는 내가 그의 눈 앞에 실체할때에만 내게 집중하는 사람같았고 그것도 만난 직 후 보다 시간이 좀 지나야했다. 로맨틱한 그의 내적자아가 나올때까지 기다려야할 필요가 있었다.<br>
                그의 표현을 빌려 말하자면 ‘모드전환’에 필요한 시간이었다.</p>

                <p>물론 평소에 내 생각을 아에 안하진 않겠지만 그에게 늘 집중대상은 ‘자기자신’과 ‘지금 이 순간’ 인것.<br>
                (이건 정말 , 사실 조금 배우고 싶은 면모이기도 하다..)</p>

                <p>P와 최초로 서로에게 이성의 호감을 느끼고 만나기 시작했던 몇 해 전 메세지를 주고받음에 있어 답답하다고 말한적이 있는데 그 날 나는 그의 기준에서 '연인에게 무례한 여자’가 되어버렸다.<br>
                솔직히 아직도 억울한 에피소드이지만 ㅋ … P가 그렇게 느꼈다면 그런거지.<br>
                그의 세계에서는 내가 낯선 리듬의 사람이었을 테니까.</p>

                <p>어떤 날은 드물게 바깥 식당에서 밥을 먹기로 한 날이었다.<br>
                모처럼 그가 나를 데리러 오기로 했는데, 약속한 시간이 지나도 나타나지 않았다.<br>
                나는 길 위에서 20분을 두리번 거리며 서 있었다.<br>
                이윽고 P가 나를 발견하고 만났을때 나는 좀 예민해져 있었지만 문제를 삼는 대신 “여기 좀 복잡하지?” 하고 웃으며 넘겼다.</p>

                <p>하지만 마음 한켠에서는 의문이 들었다.<br>
                ‘다른 사람이었어도 이렇게 했을까? 내가 일 관련 거래처 사람이라면? 호감있는 이성을 처음 만나는거라면?'<br>
                ‘혹시 나니까 괜찮다고 생각하는 건 아닐까?’등등 ….</p>

                <p>그런데 약속시간에 늦은거보다 좋지 않았던 건 미안하다는 말 한마디 없던 그의 태도였다. 미안함 보단 복잡한 우리동네에서 해맨 어려움이 더 크게 작용했던 것 같다.<br>
                나의 답답하다는 한 마디가 그에게 무례 라면 나에겐 상대가 약속 시간에 늦거나 미안함을 표현하지 않는게 무례였다.<br>
                굳이 미안하다는 말이 아니라도 “많이 기다렸어?” 정도는 할수있지않냐는게 내 상식이었다.</p>

                <p>그러나 이런 불편함을 부드럽게 전달할수 있는 내공이 나에게도 필요함을 느꼈다. P가 싫어하는 건 불편함과 예민함을 짜증으로 표출하는 태도이지 불편한 얘기를 거부하는게 아니었다.<br>
                처음엔 우리의 이런 차이로인해 생각이 여러갈래로 많아졌지만 지금은 그런 불편함조차도 조율이 되고있긴 하다.<br>
                생각이 한 방향으로 좁혀지고 있기 때문이다.</p>

                <p>P와 가지는 교감의 기쁨과 함께하는 시간속에 얻는 가치에 비하면 잠깐씩 느끼는 불편은 너무도 사소한것이라는 생각이 압도적으로 커졌다.<br>
                그리고 P가 나 때문에 겪는 불편들이 더 많지않을까를 함께 생각했기에_</p>

                <p>우리가 다시 만나기 훨씬 이전 , 그러니까 내가 답답하다고 P에게 무례를 범했던 시기 ㅎ<br>
                우리는 서로에 대해 정말 아무것도 모른채 그저 호감도에 기대어 만나자 얼마안되 P는 항복을 했었다.<br>
                아무래도 그에게 나는 지인이 아닌 이성으로 만나기엔 '꽝'이었던 것이다. ㅋ</p>

                <p>나는 그때 ‘그’를 몰랐고 ‘내 자신’도 잘 몰랐던거 같다.<br>
                무엇보다 관계를 이어가는 방식의 차이를 몰랐다.<br>
                그는 나와 좋은 지인으로 계속 남고싶다고 했지만 그 후로 오랫동안 나도 그도 연락하지 않았다.<br>
                그러다가 뜬금없이 내가 연락을 한거다.<br>
                그가 헤어질 때 내게 바랬던 지인으로 다가간 , 바로 그 취향의 밤_ 부터 지금까지 이어져온 ,내 세계관으로는 설명하기 어려웠던 낯선 사랑의 형태</p>

                <p>이제 P와 나는 아주 자연스레 사랑이라 부를수 있는 무언가를 주고받는다.</p>

                <h5>[사랑의형태2 - 귀여움,사랑의 의미]</h5>
                <p>만남이 지속되면서 P는 내게 좀 더 안정감을 느끼는거 같았고 나는 그와 나의 관계를 바라보는것이 이전보다 여유로워 지면서 나만 생각할지 모르는 그의 귀여움에 빠지곤했다.</p>

                <p>P는 어떠한 소재 , 이를테면 맛집에 대한 평가 혹은 TV속 배우들의 연기력이나 스토리에 빗댄 인간의 삶 등을 전문가처럼 분석하고 얘기할때가 있는데, 특히 실망스러움에 대한 비판을 할때 그의 점점 고조되는 목소리와 말투 , 진지한 표정이 나는 왜 그렇게 귀여운지 모르겠다.<br>
                어떤 순간엔 , 대화중 내가 던진 키워드에 강력히 공감하면서 "와아 이런걸 얘기한다고?" 하며 흥분할때도 있는데 뭐 저렇게까지 감탄할 일인가 싶어도 그 과한 리액션이 또 너무 귀여웠다.</p>

                <p>그리고 내가 너무 좋아하는 그의 남성적 외형과 달리 놀라울 정도로 여성미 넘치는? P의 주방소품이나 부잣집 사모님들이 쓸것만 같은 엔틱한 커피잔에 커피를 따라주며 그것을 사게된 경위를 자세히 설명한다던가 하는 ,,<br>
                그런 반전의 섬세함과 진지함이 내겐 정말이지 귀엽게 다가왔다.</p>

                <p>P는 대체적으로 진지하게 얘기했고 나는 대체적으로 잘 웃었다.<br>
                그가 그걸 아는지는 모르겠지만 ..<br>
                지난 연애에 있어 난 만날수록 덜 웃는 사람이었다.<br>
                유난히 개그욕심이 많아 시시때때로 나를 웃겨보려던 사람을 만난적도 있었지만 되풀이되던 말장난개그에 지쳤던 난 주로 어이가 없어서 웃기는 했지만 피로감이 더했다.<br>
                웃긴 남자가 인기 많다고는 하지만 난 아닌거같다.... ㅎ<br>
                (정확히 말하면 ‘웃기려고만 하는 남자’)</p>

                <p>아무튼 그런 나지만 P앞에서는 내가봐도 이상한 이유들로 많이 웃었다.<br>
                혹시 나는 그의 얼굴이나 몸을 보며 저절로 웃음이 났던건 아닐까 생각도 해봤지만 그런거라면 처음 만났을때부터 웃어야 했을텐데 그건 아니었다.ㅋㅋ<br>
                그를 만날수록 그의 외모도 지성도 가치관도 취향과 함께 더욱 진하게 다가왔다.</p>

                <p>생각해보면 , P는 사실 인간로봇처럼 나를 볼때 표정의 변화가 크지않고 대부분 차분한 편이라 보기힘든 그의 고조된 분위기는 마치 과부하걸려 폭주하는 로봇을 연상시켜 웃음이 났던것도 같다.<br>
                또 180cm넘는 헬창느낌의 건장한 남자가 상탈을 한채 엔틱한 커피잔에 커피를 따라 마시는걸 생각해보라 ,,, 너무 귀엽지 않나??<br>
                (P는 집에서 상의를 입고있을때가 거의없다)</p>

                <p>초창기 P는 나를 보며 활짝 웃거나 귀여운 아기 혹은 강아지보듯 미소를 짓는것도 느낀적이 없어서 아마 난 그가 더 로봇같다는 생각을 했던거같다.<br>
                심지어 처음 내게 사랑한다고 했을때도 그의 표정을 확인할수 없었다.<br>
                사랑한다는 말은 그에게서 들은 의외의 말 중 1위였다 ㅋ<br>
                2위는 내 외모가 이상형에 가깝다는거였고 3위는 내가 똑똑하다는거 였다.<br>
                좋아하는 남자에게 들을수 있는 최고의 말들인데 .. 그래서 좋았지만 굉장히 의외였다.</p>

                <p>“사랑해”<br>
                이 말을 처음 들었을 땐 매우 당황스러웠다. 만나 함께하는 시간의 질감만큼 평소 일상에서도 어느정도 연결된 느낌이 있어야 애정이 깊어지던 나이기도 하거니와 나를 보는 표정들은 비슷하니까 , 그 말을 하고있는 그의 밀도가 전해지지가 않았다.</p>

                <p>이제 내가 느끼는건 그의 표정이 한결 편안해보인다는 것이다.<br>
                난 남녀 사이의 사랑이라는 감정이 얼마나 덧없이 사라질수 있는지 알고 있어서 그 단어를 무겁게 받아들이는 편이다.<br>
                그래서 오랫동안 연인에게 사랑한다는 말을 하지않았다. 내게 그 말 속엔 좀 더 광범위한 의미들이 포함되있었다. 책임이나 희생같은 _</p>

                <p>P에게 사랑은 뭘까 , 그가 내게 느끼는 사랑이뭔지 왜 내게 사랑한다고 말하는지 알수가없어 처음엔 아무말도 할수가 없었다.<br>
                그러다 어느 순간 든 생각은 P의 사랑은 약속이나 책임의 의미보단 그때의 진심어린 감정이란것이다.<br>
                그가 그 시간들속에서 사랑을 느끼고 표현하는 것 , 그의 표현이 없었다면 나는 끝내 이 사랑의 형태를 받아들일수 없었을지도 모른다.</p>

                <p>그리고 내가 느끼는 아주 중요한 포인트가 있었는데 P는 이전에 만난 이성들과는 다르게 나를 해석하는 사람이었다.<br>
                첫 호감의 시작은 누구나 외면이듯 그도 그랬겠지만 그는 내가 가진 겉면들 이면의 가치를 봐주는 사람이었다. 내 환경과 배경과는 상관없이 ‘나’라는 사람 자체를 받아들이는 그의 방식 , 그의 세계에서는 나도 ‘지금’에 온전히 충실할 수 있었다.<br>
                난 그와 함께하는 시간들이 더욱 소중해졌고 , 어느새 나도 자연스럽게 사랑을 표현했다.</p>

                <h5>[에필로그]</h5>
                <p>이제 함께하지 않는 시간 속에서도 조용히 한 켠을 지켜주는 P의 존재감이 있다.<br>
                어느 날, 좋아하는 베이커리에서 갓 구워져 나온 따끈한 빵을 보았다.<br>
                봉긋하고 윤기 흐르는 갈색 빵의 표면을 바라보다가 문득 비슷한 피부톤의 P가 생각났다.<br>
                매끄럽고 단단한 그의 살결을 떠올리며 혼자 얼굴을 붉히고 피식 웃고 말았다.</p>

                <p>P와 충분히 시간을 보낸 뒤, 그 여운이 오래 남을 때면 비혼주의인 나지만 어릴 적 품었던 결혼식 판타지가 슬그머니 고개를 들 때도 있었다.<br>
                그가 사랑하는 밤 시간대, 내가 좋아하는 숲이나 해변 같은 곳에서, 은은한 조명과 바람, 음악을 곁들여 둘만의 조용한 의식을 치르는 상상.<br>
                아무것도 강요하지 않은 두 사람의 작은 의식.<br>
                몽상일지 모를 설레이는 상상의 대상이 있다는것도 그게 P라는것도 감사하다.</p>

                <p>현실에 진심이고 마음엔 낭만이 가득한 나라는 인간이 살아가는 힘이되기도 한다.<br>
                그런 생각도 잠시 , 다시 내 일상에 충실할 시간들이 오면 나는 이전보다 조금은 더 용기있게 , 차분히 내 세계를 다듬어간다.<br>
                P가 그렇듯이 삶의 중심을 나로부터 단단히 채워가도록_</p>

                <p>가끔은 그가 없는 날들이 더 선명하다.<br>
                내가 좋아하는 이른 아침의 따뜻한라떼를 시작으로 차분히 정돈해나가고 책임지며 행하고 설계된 내 삶의 요소들<br>
                그 모든 것들이 내 취향의 결을 따라 아무 방해 없이 흘러간다.<br>
                나는 더 괜찮은 사람이 되고싶다. 그가 있을때도 없을때도 말이다.</p>

                <p>이번주는 모처럼 , 내가 좋아하는 햇살가득한 낮에 드라이브를 하고 바닷가에서 리프레쉬를 하려한다.<br>
                그리고 그와 맞이할 우리의 밤도 기대하면서 ,,</p>

                <p>우리는 사랑을 억지로 정의하지도 않았고, 미래를 약속하지도 않았다.<br>
                그럼에도 불구하고 서로의 시간을 조금씩 덜 외롭게 만들어주고 ‘우리만의 세계를’ 쌓아가고 있다.<br>
                아마도 그것이면 지금은 충분할지도 모른다.</p>
            </div>
        `
    }
};

function openBook(storyId) {
    const modal = document.getElementById('book-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    const container = document.getElementById('story-container');
    const story = stories[storyId];

    if (story) {
        title.textContent = story.title;
        body.innerHTML = story.content;
        modal.hidden = false;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Reset scroll position
        container.scrollLeft = 0;
        
        // Update layout for columns
        updateColumnLayout();
        
        // Wait for layout to stabilize then update indicator
        setTimeout(updatePageIndicator, 100);
    }
}

function closeBook() {
    const modal = document.getElementById('book-modal');
    modal.hidden = true;
    document.body.style.overflow = '';
}

function updateColumnLayout() {
    const container = document.getElementById('story-container');
    if (!container) return;
    
    const style = window.getComputedStyle(container);
    const paddingLeft = parseFloat(style.paddingLeft);
    const paddingRight = parseFloat(style.paddingRight);
    // clientWidth includes padding, so subtract it to get content box width
    const contentWidth = container.clientWidth - paddingLeft - paddingRight;
    
    // Set column width to exactly the content width
    container.style.columnWidth = `${contentWidth}px`;
    
    // Store values for navigation
    const gap = parseFloat(style.columnGap) || 0;
    container.dataset.columnGap = gap;
    container.dataset.contentWidth = contentWidth;
}

let isFlipping = false;

// Ebook Navigation Logic
function changePage(direction) {
    if (isFlipping) return; // Prevent rapid clicks causing clipping

    const container = document.getElementById('story-container');
    
    // Use calculated values if available, otherwise fallback
    const contentWidth = parseFloat(container.dataset.contentWidth) || container.clientWidth;
    const gap = parseFloat(container.dataset.columnGap) || 0;
    const scrollAmount = contentWidth + gap;
    
    // Check boundaries
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth; // Approx
    
    if (direction === 1 && currentScroll >= maxScroll - 10) return; // End of book
    if (direction === -1 && currentScroll <= 10) return; // Start of book

    isFlipping = true;
    
    // Create a clone of the current view
    const clone = document.createElement('div');
    clone.className = 'page-clone';
    // clone.innerHTML = container.innerHTML; // Blank page
    
    // Copy computed styles that affect layout
    const style = window.getComputedStyle(container);
    
    // Explicitly copy dimensions and layout properties for exact match
    clone.style.width = `${container.offsetWidth}px`;
    clone.style.height = `${container.offsetHeight}px`;
    clone.style.paddingTop = style.paddingTop;
    clone.style.paddingBottom = style.paddingBottom;
    clone.style.paddingLeft = style.paddingLeft;
    clone.style.paddingRight = style.paddingRight;
    clone.style.columnWidth = style.columnWidth;
    clone.style.columnGap = style.columnGap;
    clone.style.columnFill = style.columnFill;
    clone.style.columnRule = style.columnRule;
    
    clone.style.fontFamily = style.fontFamily;
    clone.style.fontSize = style.fontSize;
    clone.style.lineHeight = style.lineHeight;
    clone.style.textAlign = style.textAlign;
    clone.style.color = style.color;
    clone.style.boxSizing = 'border-box';
    
    // Position exactly over the container
    clone.style.position = 'absolute';
    clone.style.left = `${container.offsetLeft}px`;
    clone.style.top = `${container.offsetTop}px`;
    clone.style.margin = style.margin;
    
    // Append to parent (modal-content) to overlay
    container.parentElement.appendChild(clone);
    
    // Force layout to ensure scrollWidth is calculated
    void clone.offsetHeight;
    
    // No need to sync scroll for blank page
    
    // Immediately scroll the real container to the next page
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'auto'
    });
    updatePageIndicator();
    
    // Animate the clone flipping away
    // If Next (1): Flip Left (rotateY -90)
    // If Prev (-1): Flip Right (rotateY 90)
    const animationClass = direction === 1 ? 'flip-out-left' : 'flip-out-right';
    clone.classList.add(animationClass);
    
    // Cleanup after animation
    setTimeout(() => {
        clone.remove();
        isFlipping = false;
    }, 600); // Match CSS animation duration
}

function updatePageIndicator() {
    const container = document.getElementById('story-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicator = document.getElementById('page-indicator');
    
    const contentWidth = parseFloat(container.dataset.contentWidth) || container.clientWidth;
    const gap = parseFloat(container.dataset.columnGap) || 0;
    const scrollAmount = contentWidth + gap;
    
    // Get padding to correct scrollWidth calculation
    const style = window.getComputedStyle(container);
    const paddingLeft = parseFloat(style.paddingLeft);
    const paddingRight = parseFloat(style.paddingRight);
    
    // scrollWidth includes padding, so we subtract it to get the width of the paginated content
    // We use a small tolerance (1px) to handle sub-pixel rendering issues
    const totalScrollableWidth = container.scrollWidth - paddingLeft - paddingRight;
    
    const currentPage = Math.round(container.scrollLeft / scrollAmount) + 1;
    const totalPages = Math.max(1, Math.ceil((totalScrollableWidth + 1) / scrollAmount));
    
    indicator.textContent = `${currentPage} / ${totalPages}`;
    
    prevBtn.disabled = currentPage <= 1;
    nextBtn.disabled = currentPage >= totalPages;
}

// Handle click on container to flip pages
document.getElementById('story-container').addEventListener('click', (e) => {
    const container = e.currentTarget;
    const clickX = e.clientX - container.getBoundingClientRect().left;
    const width = container.clientWidth;
    
    // If clicked on left 30%, go prev. Right 30%, go next. Center? Maybe nothing or next.
    if (clickX < width * 0.3) {
        changePage(-1);
    } else if (clickX > width * 0.7) {
        changePage(1);
    }
});

// Update indicator on resize
window.addEventListener('resize', () => {
    if (!document.getElementById('book-modal').hidden) {
        updateColumnLayout();
        updatePageIndicator();
    }
});

// Handle book interaction (Touch vs Click)
function handleBookClick(element, storyId) {
    // Check if device supports hover (coarse pointer usually means touch)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    if (isTouch) {
        // If already flipped, open the book
        if (element.classList.contains('is-flipped')) {
            openBook(storyId);
        } else {
            // Close any other open books
            document.querySelectorAll('.book').forEach(b => b.classList.remove('is-flipped'));
            // Flip this one
            element.classList.add('is-flipped');
        }
    } else {
        // Non-touch devices: just open (hover handles the flip)
        openBook(storyId);
    }
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
    book.style.setProperty('--random-rotate', `${randomRot}deg`);
    
    // Set transform origin based on rotation direction to prevent clipping
    // If rotating clockwise (+), pivot on bottom right to lift left side
    // If rotating counter-clockwise (-), pivot on bottom left to lift right side
    if (randomRot > 0) {
        book.style.setProperty('--transform-origin', 'bottom right');
    } else {
        book.style.setProperty('--transform-origin', 'bottom left');
    }
});
