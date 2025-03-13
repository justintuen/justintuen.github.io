<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>悠閒咖啡廳音樂</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: 'Microsoft JhengHei', sans-serif;
            background-image: url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?fit=crop&w=1950&q=80');
            background-size: cover;
            background-position: center;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0,0,0,0.5);
            background-blend-mode: overlay;
        }
        .container {
            text-align: center;
            background-color: rgba(0,0,0,0.6);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        h1 {
            margin-bottom: 15px;
        }
        audio {
            width: 100%;
            max-width: 400px;
            outline: none;
        }
    </style>
</head>
<body>
    <script>
        const container = document.createElement('div');
        container.className = 'container';

        const title = document.createElement('h1');
        title.textContent = '悠閒咖啡廳音樂時光';

        const description = document.createElement('p');
        description.textContent = '放鬆一下，享受這一刻的寧靜與美好。';

        const audio = document.createElement('audio');
        audio.setAttribute('controls', '');
        audio.setAttribute('autoplay', '');
        audio.setAttribute('loop', '');

        const source = document.createElement('source');
        source.src = 'just-relax-11157.mp3';
        source.type = 'audio/mp3';

        audio.appendChild(source);
        audio.textContent = '您的瀏覽器不支援音樂播放。';

        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(audio);

        document.body.appendChild(container);
    </script>
</body>
</html>
