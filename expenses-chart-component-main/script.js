const barMon = document.getElementById('bar-mon');
const barTue = document.getElementById('bar-tue');
const barWed = document.getElementById('bar-wed');
const barThu = document.getElementById('bar-thu');
const barFri = document.getElementById('bar-fri');
const barSat = document.getElementById('bar-sat');
const barSun = document.getElementById('bar-sun');

const bars = [barMon, barTue, barWed, barThu, barFri, barSat, barSun];

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        try {
            for(let i=0; i<data.length; i++) {
                bars[i].style.height = (data[i].amount * 2.5) + 'px';
            }

            bars.forEach(bar => {
                const barprice = document.createElement('div');
                barprice.classList.add('bar-price');
                barprice.style.width = '60px';
                barprice.style.height = '35px';
                barprice.style.background = 'hsl(25, 47%, 15%)';
                barprice.style.borderRadius = '5px';
                barprice.style.color = 'hsl(100, 100%, 100%)';
                barprice.style.position = 'relative';
                barprice.style.right = '0.25em';
                barprice.style.top = '-2.5em';
                const p = document.createElement('p');
                p.textContent = (parseInt(bar.style.height)/2.5).toFixed(2) + '$';
                barprice.appendChild(p);

                bar.addEventListener('mouseover', () => {
                    bar.appendChild(barprice);
                });

                bar.addEventListener('mouseout', () => {
                    bar.removeChild(barprice);
                });
            });
        } catch(err) {
            console.error(err);
        }
    }
);