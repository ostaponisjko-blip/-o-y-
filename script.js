const data = ["д-30","мт-12","т-12","т12","д-20","2а36","2а65","2а46","2а46м","2а33","2а31"];

window.onload = () => {
    search.addEventListener("input", showSuggestions);
    searchBtn.addEventListener("click", searchData);
    themeBtn.addEventListener("click", toggleTheme);
};

// 🔍 підказки
function showSuggestions(){
    let val = search.value.toLowerCase();
    suggestions.innerHTML="";

    if(!val){
        suggestions.style.display="none";
        return;
    }

    data.filter(i=>i.includes(val)).forEach(i=>{
        let d=document.createElement("div");
        d.textContent=i;
        d.onclick=()=>{
            search.value=i;
            suggestions.style.display="none";
            searchData();
        };
        suggestions.appendChild(d);
    });

    suggestions.style.display="block";
}

// 🔎 пошук
function searchData(){
    let i = search.value.toLowerCase();

    // 🔴 Д-30
    if(i.includes("д-30")){
        result.innerHTML = `
        <h2>Д 30 (2Ф18)</h2>
        <div class="table-wrap">
        <table>
        <tr>
        <th>N п.п</th><th></th><th>Кількість рідини (л)</th><th>кг</th><th>МГЕ 10А</th><th>Олива АУ</th><th>Тиск</th>
        </tr>
        <tr><td>1</td><td>Накатник</td><td>9,77</td><td></td><td></td><td></td><td>46 (+2 -1)</td></tr>
        <tr><td>2</td><td>Гальмо відкату</td><td>10,3</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>3</td><td>Урівноважуючий механізм</td><td>0,45</td><td></td><td></td><td></td>
        <td>97 (зволожений)<br>63 (+-2 при 70%)</td></tr>
        <tr><td>4</td><td>Тиск при штучному відкаті (250 мм)</td><td></td><td></td><td></td><td></td><td>По таблиці</td></tr>
        <tr><td>5</td><td>Домкрат</td><td>3</td><td></td><td></td><td></td><td></td></tr>
        </table>
        </div>
        <p><b>Довжина відкату на повному заряді :</b></p>
        <p>Нормальний – 790 - 930</p>
        <p>Максимальний – 940</p>
        `;
    }

        // 🔵 Т-12 (ДОДАНО, НЕ ЧІПАЄ ІНШЕ)
    else if(i.includes("т-12") || i.includes("т12")){
        result.innerHTML = `
        <h2>Т-12 (2А29)</h2>
        <div class="table-wrap">
        <table>
        <tr>
        <th>N п.п</th><th></th><th>Кількість рідини (л)</th><th>кг</th><th>МГЕ 10А</th><th>Олива АУ</th><th>Тиск</th>
        </tr>
        <tr><td>1</td><td>Накатник</td><td>4,0</td><td></td><td></td><td></td><td>60 (+2 -1)</td></tr>
        <tr><td>2</td><td>Гальмо відкату</td><td>5,5</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>3</td><td>Урівноважуючий механізм</td><td></td><td></td><td></td><td>0,7</td><td>97 (+5)</td></tr>
        <tr><td>4</td><td>Тиск при штучному відкаті (200 мм)</td><td></td><td></td><td></td><td></td><td>По таблиці</td></tr>
        </table>
        </div>
        <p><b>Довжина відкату :</b></p>
        <p>Нормальна – 680 - 770</p>
        <p>Максимальна – 780</p>
        `;
    }

    // 🔵 МТ-12
    else if(i.includes("мт-12")){
        result.innerHTML = `
        <h2>МТ-12 (2А29)</h2>
        <div class="table-wrap">
        <table>
        <tr>
        <th>N п.п</th><th></th><th>Кількість рідини (л)</th><th>кг</th><th>МГЕ 10А</th><th>Олива АУ</th><th>Тиск</th>
        </tr>
        <tr><td>1</td><td>Накатник</td><td>4,0</td><td></td><td></td><td></td><td>60 (+2 -1)</td></tr>
        <tr><td>2</td><td>Гальмо відкату</td><td>5,5</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>3</td><td>Урівноважуючий</td><td></td><td></td><td></td><td>0,7</td><td>97 (+5)</td></tr>
        <tr><td>4</td><td>Тиск при штучному відкаті (200 мм)</td><td></td><td></td><td></td><td></td><td>По таблиці</td></tr>
        </table>
        </div>
        <p><b>Довжина відкату :</b></p>
        <p>Нормальна – 680 - 770</p>
        <p>Максимальна – 780</p>
        `;
    }

    // 🟢 Д-20
    else if(i.includes("д-20")){
        result.innerHTML = `
        <h2>Д-20 (52-П-546)</h2>
        <div class="table-wrap">
        <table>
        <tr>
        <th>N</th><th></th><th>Кількість рідини</th><th></th><th></th><th></th><th>Тиск</th>
        </tr>
        <tr><td>1</td><td>Накатник</td><td>13,4</td><td></td><td></td><td></td><td>63 (+2 -1)</td></tr>
        <tr><td>2</td><td>Гальмо</td><td>14,7</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>3</td><td>Урівноважуючий</td><td>0,150 + 20–30 гр</td><td></td><td></td><td></td><td>57–67</td></tr>
        <tr><td>4</td><td>Домкрат</td><td>1,0</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>5</td><td>Тиск при відкаті</td><td></td><td></td><td></td><td></td><td>По таблиці</td></tr>
        </table>
        </div>
        <p><b>Довжина відкату :</b></p>
        <p>Нормальна - 910 (+20,-120)</p>
        <p>Максимальна – 950</p>
        `;
    }

    // 🟡 2А36
    else if(i.includes("2а36")){
        result.innerHTML = `
        <h2>2А36 (Гіацинт)</h2>
        <div class="table-wrap">
        <table>
        <tr>
        <th>N</th><th></th><th>л</th><th>Тиск</th>
        </tr>
        <tr><td>1</td><td>Накатник</td><td>1,5</td><td>55 (+2 -1)</td></tr>
        <tr><td>2</td><td>Гальмо</td><td>32,6</td><td></td></tr>
        <tr><td>3</td><td>Урівноважуючий</td><td>1,4</td><td>72 (+7 -5)</td></tr>
        <tr><td>4</td><td>Домкрат</td><td>1,0</td><td></td></tr>
        <tr><td>5</td><td>Гідропневмоакумулятор</td><td>5,0</td><td>50 (+1)</td></tr>
        <tr><td>6</td><td>Домкрат з піддоном</td><td>8,0</td><td></td></tr>
        </table>
        </div>
        <p><b>Довжина відкату ствола на повному заряді, мм :</b></p>
        <p>Довгий – 1350 ( +70, - 100)</p>
        <p>Короткий – 785 ( +,- 50)</p>
        <p>Максимальний (до СТОП) – 1450</p>
        `;
    }

    // 🟣 2А65
    else if(i.includes("2а65")){
        result.innerHTML = `
        <h2>2А65 (Мста-Б)</h2>
        <div class="table-wrap">
        <table>
        <tr>
        <th>N</th><th></th><th>л</th><th>МГЕ 10А</th><th>Тиск</th>
        </tr>
        <tr><td>1</td><td>Накатник</td><td>1,0</td><td></td><td>55 (+-2,5)</td></tr>
        <tr><td>2</td><td>Гальмо</td><td>17,5</td><td></td><td></td></tr>
        <tr><td>3</td><td>Урівноважуючий</td><td>0,45</td><td></td><td>95 (+-5)</td></tr>
        <tr><td>4</td><td>Гідробуфер</td><td>0,45</td><td></td><td></td></tr>
        <tr><td>5</td><td>Кожух люльки</td><td>10,5</td><td></td><td></td></tr>
        <tr><td>6</td><td>Компенсатор</td><td></td><td>1,25</td><td></td></tr>
        <tr><td>7</td><td>Гідроциліндр</td><td></td><td>0,3</td><td></td></tr>
        </table>
        </div>
        <p>Максимальна довжина: 1000</p>
        `;
    }

    // ⚫ 2А46
    else if(i === "2а46"){
        result.innerHTML = `
        <h2>2А46 (Т-72 / Т-64)</h2>
        <div class="table-wrap">
        <table>
        <tr>
        <th>N п/п</th><th></th><th>Кількість рідини (л)</th><th>Тиск</th>
        </tr>
        <tr><td>1</td><td>Накатник</td><td>4,6 – 4,8</td><td>63 - 67</td></tr>
        <tr><td>2</td><td>Гальмо відкату</td><td>7,3</td><td></td></tr>
        </table>
        </div>`;
    }

    // ⚫ 2А46М
    else if(i.includes("2а46м")){
        result.innerHTML = `
        <h2>2А46М</h2>
        <p><b>В накатнику штоки повинні бути заховані до штопорного кольца.</b></p>
        <p><b>В тормоз.</b></p>
        <p><b>Довжина відкату :</b></p>
        <p>Нормальна - 640 -720</p>
        <p>Максимальна – 740</p>
        <p><b>Шкала підйому ствола – роз’яснення дивимось нижче під фото</b></p>

        <div class="table-wrap">
        <table>
        <tr><th>N</th><th></th><th>л</th><th>Тиск</th></tr>
        <tr><td>1</td><td>Накатник</td><td>0,3</td><td>58 - 62</td></tr>
        <tr><td>2</td><td>Гальмо відкату (2 шт)</td><td>7,2 (по 3,6)</td><td></td></tr>
        </table>
        </div>
        `;
    }

    // 🔵 2А33
    else if(i.includes("2а33")){
        result.innerHTML = `
        <h2>2А33 (2С3М)</h2>
        <p><b>В накатнику штоки повинні бути втоплені на 18мм.</b></p>
        <p><b>В тормозах відкату штоки повинні бути в рівень зрізу.</b></p>
        <div class="table-wrap">
        <table>
        <tr><th>N</th><th></th><th>л</th><th>Тиск</th></tr>
        <tr><td>1</td><td>Накатник</td><td>0,5</td><td>65 (+1 -2)</td></tr>
        <tr><td>2</td><td>Гальмо відкату</td><td>13,2</td><td></td></tr>
        <tr><td>3</td><td>Урівноважувач</td><td>0,45</td><td>59 – 69 (при 60%)</td></tr>
        </table>
        </div>
        <p><b>Довжина відкату :</b></p>
        <p>Нормальна - 260 - 300</p>
        <p>Максимальна – 310</p>
        `;
    }

    // 🟢 2А31
    else if(i.includes("2а31")){
        result.innerHTML = `
        <h2>2А31 (2С1)</h2>
        <p><b>В накатнику штоки повинні бути заховані до штопорного кольца.</b></p>
        <p><b>В гальмі відкату відкриваємо віконечко, відкручуємо пробку і при возвишенні ствола на 3% рівень повинен проглядатись.</b></p>

        <div class="table-wrap">
        <table>
        <tr><th>N</th><th></th><th>л</th><th>Тиск</th></tr>
        <tr><td>1</td><td>Накатник</td><td>0,5</td><td>42 (+2 -1)</td></tr>
        <tr><td>2</td><td>Гальмо</td><td>7</td><td></td></tr>
        <tr><td>3</td><td>Урівноважувач</td><td>0,15</td><td>50 (+2 -1) (при 70%)</td></tr>
        </table>
        </div>

        <p><b>Довжина відкату :</b></p>
        <p>Нормальна - 535 - 565</p>
        <p>Максимальна – 600</p>
        `;
    }

    else{
        result.innerHTML = "<p>Нічого не знайдено</p>";
    }
}

// 🌙 тема
function toggleTheme(){
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
}