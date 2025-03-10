function generateBBCode() {
       
    const countryName = document.getElementById("countryName").value.trim();

    // COLLECT THE LARGEST CITIES.

    const largestCityNames = [];
    const largestCityImages = [];

    for (let i = 1; i <= 4; i++) {
        largestCityNames.push(document.getElementById(`largestCityName${i}`).value.trim());
        largestCityImages.push(document.getElementById(`largestCityImage${i}`).value.trim());
    }

    // COLLECT THE CITIES' NAME, PROVINCE, AND POPULATION.

    const cities = [];

    for (let i = 1; i <= 20; i++) {
       const name = document.getElementById(`name${i}`).value.trim();;
       const province = document.getElementById(`province${i}`).value.trim();;
       const population = document.getElementById(`population${i}`).value.trim();;

       cities.push({name, province, population});
    }

    /* PRINT THE BBCODE. (TRY TO ATLEAST!)
       THE NON-SPECIAL ROW IS ROW 7-8, 11-12.
       ROW 1-4 IS UNCHANGEABLE. */

    // FOR NOW I'LL PRINT IT LINE BY LINE.

       let BBCode = `[box][table=plain]
       [tr][td=c10][centre][b]Largest cities or towns in ${countryName}[/b][/centre][/td][/tr]
       [tr][td=c10][centre]Statistical Office of ${countryName} (Census 2022)[/centre][/td][/tr]

       [tr][td][colour=#ffffff].[/colour][/td][td][b]Rank[/b][/td][td][b]Name[/b][/td][td][b]Province[/b][/td][td][b]Pop.[/b][/td][td][b]Rank[/b][/td][td][b]Name[/b][/td][td][b]Province[/b][/td][td][b]Pop.[/b][/td][td][colour=#ffffff].[/colour][/td][/tr]

       [tr][td][colour=#ffffff].[/colour][/td][td][centre][background-block=#efeeef]1[/background-block][/centre][/td][td]${cities[0].name}[/td][td]${cities[0].province}[/td][td]${cities[0].population}[/td][td][centre][background-block=#efeeef]11[/background-block][/centre][/td][td]${cities[10].name}[/td][td]${cities[10].province}[/td][td]${cities[10].population}[/td][td][colour=#ffffff].[/colour][/td][/tr]

       [tr][td=r3][img]${largestCityImages[0]}[/img][/td][td][centre][background-block=#efeeef]2[/background-block][/centre][/td][td]${cities[1].name}[/td][td]${cities[1].province}[/td][td]${cities[1].population}[/td][td][centre][background-block=#efeeef]12[/background-block][/centre][/td][td]${cities[11].name}[/td][td]${cities[11].province}[/td][td]${cities[11].population}[/td][td=r3][img]${largestCityImages[2]}[/img][/td][/tr]

       [tr][td][centre][background-block=#efeeef]3[/background-block][/centre][/td][td]${cities[2].name}[/td][td]${cities[2].province}[/td][td]${cities[2].population}[/td][td][centre][background-block=#efeeef]13[/background-block][/centre][/td][td]${cities[12].name}[/td][td]${cities[12].province}[/td][td]${cities[12].population}[/td][/tr]

       [tr][td][centre][background-block=#efeeef]4[/background-block][/centre][/td][td]${cities[3].name}[/td][td]${cities[3].province}[/td][td]${cities[3].population}[/td][td][centre][background-block=#efeeef]14[/background-block][/centre][/td][td]${cities[13].name}[/td][td]${cities[13].province}[/td][td]${cities[13].population}[/td][/tr]

       [tr][td]${largestCityNames[0]}[/td][td][centre][background-block=#efeeef]5[/background-block][/centre][/td][td]${cities[4].name}[/td][td]${cities[4].province}[/td][td]${cities[4].population}[/td][td][centre][background-block=#efeeef]15[/background-block][/centre][/td][td]${cities[14].name}[/td][td]${cities[14].province}[/td][td]${cities[14].population}[/td][td]${largestCityNames[2]}[/td][/tr]

       [tr][td=r3][img]${largestCityImages[1]}[/img][/td][td][centre][background-block=#efeeef]6[/background-block][/centre][/td][td]${cities[5].name}[/td][td]${cities[5].province}[/td][td]${cities[5].population}[/td][td][centre][background-block=#efeeef]16[/background-block][/centre][/td][td]${cities[15].name}[/td][td]${cities[15].province}[/td][td]${cities[15].population}[/td][td=r3][img]${largestCityImages[3]}[/img][/td][/tr]

       [tr][td][centre][background-block=#efeeef]7[/background-block][/centre][/td][td]${cities[6].name}[/td][td]${cities[6].province}[/td][td]${cities[6].population}[/td][td][centre][background-block=#efeeef]17[/background-block][/centre][/td][td]${cities[16].name}[/td][td]${cities[16].province}[/td][td]${cities[16].population}[/td][/tr]

       [tr][td][centre][background-block=#efeeef]8[/background-block][/centre][/td][td]${cities[7].name}[/td][td]${cities[7].province}[/td][td]${cities[7].population}[/td][td][centre][background-block=#efeeef]18[/background-block][/centre][/td][td]${cities[17].name}[/td][td]${cities[17].province}[/td][td]${cities[17].population}[/td][/tr]

       [tr][td]${largestCityNames[1]}[/td][td][centre][background-block=#efeeef]9[/background-block][/centre][/td][td]${cities[8].name}[/td][td]${cities[8].province}[/td][td]${cities[8].population}[/td][td][centre][background-block=#efeeef]19[/background-block][/centre][/td][td]${cities[18].name}[/td][td]${cities[18].province}[/td][td]${cities[18].population}[/td][td]${largestCityNames[3]}[/td][/tr]

       [tr][td][colour=#ffffff].[/colour][/td][td][centre][background-block=#efeeef]10[/background-block][/centre][/td][td]${cities[9].name}[/td][td]${cities[9].province}[/td][td]${cities[9].population}[/td][td][centre][background-block=#efeeef]20[/background-block][/centre][/td][td]${cities[19].name}[/td][td]${cities[19].province}[/td][td]${cities[19].population}[/td][td][colour=#ffffff].[/colour][/td][/tr][/table][/box]`;

    document.getElementById("BBCodeOutput").value = BBCode;
}