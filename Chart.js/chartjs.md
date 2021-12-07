
```js

const config = { 
  type: 'line',
  data: {
    labels: ['빨강', 'blue', 'yellow', '초록', 'purple', 오렌지],
    datasets: [
            {
                label: '변곡점1',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'yellow',
                borderColor: 'black',
                borderWidth: 1
            },
            {
                label: '변곡점2',
                data: [10, 16, 7, 6, 4, 2],
                backgroundColor: 'white',
                borderColor: 'gray',
                borderWidth: 1
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: '차트, 그것이 알고 싶다.'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: '색상'
                }
            },
            y: {
                title: {
                    display: true,
                    text: '변곡량'
                }
            }
        },
    }
 
}

```

