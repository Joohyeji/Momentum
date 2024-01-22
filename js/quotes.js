const quotes = [{
    quote: '하루하루를 마지막이라고 생각하라. 그러면 예측할 수 없는 시간은 그대에게 더 많은 시간을 줄 것이다.',
    author:'호레스'
}
,{
    quote: '꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.',
    author:'괴테'
}
,{
    quote: '내일이란 오늘의 다른 이름일 뿐이다.',
    author:'윌리엄 포크너'
}
,{
    quote: '화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아붓는 사랑의 정도이다. ',
    author:'머더 테레사'
}
,{
    quote: '오늘이라는 날은 두 번 다시 오지 않는다는 것을 잊지 말라.',
    author:'단테'
}
,{
    quote: '시간은 우리 각자가 가진 고유의 재산이요, 유일한 재산이다. 그것을 어떻게 사용할 것인지 결정할 수 있는 것은 오로지 우리 자신뿐이다. 결코 그 재산을 남이 우리 대신 사용하지 않도록 조심해라.',
    author:'칼 샌드버그 '
}
,{
    quote: '건강에 대한 지나친 걱정만큼 건강에 치명적인 것은 없다.',
    author:'벤자민 프랭클린'
}
,{
    quote: '아침에 상쾌한 기분으로 일찍 일어나는 사람은 드물다. 대부분의 사람들은 그냥 일찍 일어날 뿐이다.',
    author:'P.P.'
}
,{
    quote: '나는 매일 저녁 모든 근심 걱정을 하나님께 넘겨 드린다. 어차피 하나님은 밤에도 안 주무실 테니까.',
    author:'메리 C. 크라울리'
}
,{
    quote: '오늘이란 신어야 할 신발과 같은 것이다.',
    author:'스티브 올렌'
}
,{
    quote: '계획이란 미래에 대한 현재의 결정이다.',
    author:'드래커 '
}
,{
    quote: '고통이 남기고 간 뒤를 보라. 고난이 지나면 반드시 기쁨이 스며든다',
    author:'괴테'
}
,{
    quote: '시간이 덜어주거나 부드럽게 해주지 않는 슬픔이란 하나도 없다. ',
    author:'키케로'
}
,{
    quote: ' 행복은 결코 많고 큰 데만 있는 것이 아니다. 작은 것을 가지고도 고마워하고 만족할 줄 안다면 그는 행복한 사람이다. 여백과 공간의 아름다움은 단순함과 간소함에 있다.',
    author:'법정스님'
}
,{
    quote: '햇빛은 하나의 초점에 모아질 때만 불꽃을 피우는 것이다. ',
    author:'벨'
}
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;