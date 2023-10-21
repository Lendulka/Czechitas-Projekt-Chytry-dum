# Domácí úkol: Chytrý dům

Za úkol máš vytvořit jednoduchý panel pro ovládání chytré domácnosti.

- [Kopie zadání na GitHubu](#kopie-zadání-na-githubu)
- [Instalace a spuštění](#instalace-a-spuštění)
- [Zadání úkolu](#zadání-úkolu)
- [Odevzdání úkolu](#odevzdání-úkolu)

Takto by měla aplikace nakonec vypadat:

![Ukázka možného výsledku](/ukazky/ukazka-vysledku.jpg)


## Kopie zadání na GitHubu

Tentokrát **nebudeš** vytvářet aplikaci úplně od začátku pomocí `create-czechitas-app`, ale postupuj následovně:

1. Vytvoř si kopii tohoto repozitáře se zadáním. Klikni na zelené tlačítko **Use this template** a v nabídce vyber **Create a new repository**. Tím se ti vytvoří kopie tohoto repozitáře do tvého GitHub účtu.
2. Naklonuj si nově vytvořený repozitář ze svého GitHub účtu k sobě na disk.
3. Až budeš mít úkol hotový (viz. dále), tak nezapomeň udělat commit a push zpět na GitHub.
4. Úkol budeš odevzdávat jako odkaz na GitHub se svým zpracovaným řešením.


## Instalace a spuštění

1. I když ty sama jsi projekt nezakládala z nuly pomocí `create-czechitas-app`, projekt je vytvořený pomocí tohoto nástroje a používá se úplně stejně. Jen už v sobě obsahuje i nějaké další připravené podklady - obrázky, HTML, CSS, apod..

2. Otevři si v editoru složku projektu, kterou sis z GitHubu naklonovala k sobě na disk. Složka, kterou otevíráš, by měla obsahovat soubor `package.json` (a další soubory a složky).

3. Otevři si v editoru terminál / příkazovou řádku a spusť příkaz:
	```
	npm install
	```

	Tím se ti do projektu doinstalují všechny potřebné balíčky závislostí stejně, jako kdybys projekt vytvářela/instalovala pomocí `create-czechitas-app`.

4. Známým způsobem zkus projekt spustit. Měl by jít normálně zkompilovat a v prohlížeči by neměl v konzoli vyhodit žádnou chybu.


## Zadání úkolu

Tvým cílem je vytvořit jednoduchý ovládací panel, u kterého budeme předstírat, že ovládá chytrou domácnost.

1. Prozkoumej složku `html-vzor`:
	- všimni si, že není uvnitř složky `src`, takže na naši aplikaci nemá žádný vliv
	- v této složce máš nakodóvaný HTML a CSS vzor výsledné stránky
	- je na tobě, aby jsi toto HTML a CSS rozsekala na kousky, ze kterých uděláš jednotlivé komponenty a dáš je na správná místa
	- součástí je i složka `images`, kde jsou všechny potřebné obrázky - ty také rozmísti k jednotlivým komponentám, které je budou potřebovat
	- obrázky v jednotlivých komponentách importuj do proměnných a pak se na ně odkazuj pomocí těchto proměnných

2. Prozkoumej složku `src`:
	- všimni si, že máš připravenou úplně prádnou aplikaci
	- ve složce `src` je soubor `smartHomeData.js`, který obsahuje všechny potřebné údaje o naší chytré domácnosti uložené do objektu `smartHomeData`. Tento objekt se ze souboru exportuje, takže ho můžeš importovat do místa, kde ho budeš potřebovat (hlavní `index.jsx`). Podívej se, jako mají data o domácnosti strukturu.

3. Do výchozího kódu aplikace v `index.jsx` přidej:
	```jsx
	<div class="container">
	</div>
	```

	Do tohoto divu umístíš dvě komponenty `<Header />` a `<Dashboard />`, až je vytvoříš.

4. Vytvoř samostatnou komponentu `Header`, která bude obsahovat jednoduchý kód ze vzorového HTML. Komponentě přidej prop `title`, kterou do komponenty půjde poslat obsah nadpisu. Ve vzorovém HTML je to `'Chytrý dům'`. Komponentu naimportuj a vlož do kontejneru v hlavní aplikaci.

5. Vytvoř samostatnou komponentu `Dashboard`, která bude obsahovat řídící panel. Komponentu naimportuj a vlož do kontejneru v hlavní aplikaci.

	V komponentě `Dashboard` bude následující HTML:
	```jsx
	<main class="dashboard">
	</main>
	```

	Jednotlivé části ovládacího panelu budou opět samostatné komponenty, které budeš vkládat do této značky `Main`.

	Rozložení komponent uvnitř dashboardu bude vypadat následovně:
	![Rozložení komponent](/ukazky/rozlozeni-komponent.jpg)

6. V hlavním `index.jsx` si naimportuj do proměnné data o chytré domácnosti ze souboru `smartHomeData.js`. Tato data předej jako prop s názvem `data` do komponenty `Dashboard`.

	Části tohoto objektu budeš později posílat jako props do příslušných komponent, které budou data potřebovat.

7. Vytvoř komponentu `Lights` (množné číslo, půjde o skupinu všech světel), přidej ji prop `lights` do které se bude z komponenty `Dashboard` předávat pole světel, která v domácnosti máme.

	Uvnitř komponenty toho pole přemapuješ na seznam komponent `Light`, které budou zobrazovat jednotlivá světla.

8. Vytvoř komponentu `Light` (jednotné číslo, půjde o komponentu pro zobrazení jednoho světla).

	![komponenta Light](/ukazky/ukazka-light.png)

	Komponenta bude přijímat props `name` (název místnosti, kde světlo je) a `state` (stav světla - `'on'` nebo `'off'`).

	Do komponenty si naimportuj oba obrázky pro rozvícenou a zhasnutou žárovku.

	V komponentě vytvoř stavovou proměnnou (pomocí `useState`) do které jako výchozí hodnotu ulož hodnotu prop `state`.

	Na `<div class="light">` uvnitř komponenty přidej událost `onClick` a do komponenty přidej funkci, která bude na kliknutí reagovat.

	Ve funkci měň hodnotu stavové proměnné (kterou sis vytvořila pomocí `useState` o několik řádků výše) z `'on'` na `'off'` a obráceně.

	Podle hodnoty této stavové proměnné zobraz buď zhasnutou nebo rozsvícenou žárovku.

	Klikáním na komponentu by mělo jít světlo rozvěcet a zhasínat.

	Až se ti toto povede, zbytek úkolu už pro tebe bude hračka, protože všechyn komponenty budou docela podobné.

9. Vytvoř komponentu `Climate`, která bude mít props `temperature` (teplota v domácnosti) a `humidity` (vlhkost vzduchu). Komponentu naimportuj a použij uvnitř komponenty `Dashboard` a předej do ní z dashboardu příslušná data.

	![komponenta Climate](/ukazky/ukazka-climate.png)

	V komponentě si vytvoř stavovou proměnnou pro teplotu a jako výchozí hodnotu do ní předej hodnotu prop `temperature`.

	V komponentě jsou dvě tlačítka pro zvýšení a snížení teploty. Přidej na obě událost `onClick` a do komponenty dopiš funkce, které budou zvyšovat nebo snižovat hodnotu stavové proměnné o 1 stupeň.

	Hodnotu stavové proměnné zobrazuj v komponentě jako nastavenou teplotu.

10. Vytvoř komponentu `Blinds`, která bude mít jednu prop nazvanou `state` ve které může být hodnota `'open'` (otevřené žaluzie) nebo `'closed'` (zavřené žaluzie). Komponentu naimportuj a použij uvnitř komponenty `Dashboard` a předej do ní z dashboardu údaj o stavu žaluzií.

	![komponenta Blinds](/ukazky/ukazka-blinds.png)

	V komponentě si vytvoř stavovou proměnnou pro stav žaluzií a jako výchozí hodnotu do ní předej hodnotu prop `state`.

	V komponentě jsou dvě tlačítka pro zavření o otevření žaluzií. Přidej na obě událost `onClick` a do komponenty dopiš funkce, které podle stisknutého tlačítka nastaví hodnotu stavové proměnné na `'open'` nebo `'closed'`.

	Do komponenty si naimportuj oba obrázky pro otevřené a zavřené žaluzie. Podle hodnoty stavové proměnné zobraz příslušnou ikonku.

	Podle hodnoty stavové proměnné také přidej třídu `button--active` na příslušné tlačítko. Obě tlačítka budou mít za každé situace svou základní CSS tříbu `button`. Když budou žaluzie otevřené, bude mít první tlačítko *Otevřít* na sobě navíc ještě třídu `button--active`. To stejné pro zavřené žaluzie u druhého tlačítka.

	Kromě změny ikonky se tedy bude vždy modře zvýrazňovat i příslušné tlačítko.

11. Vytvoř komponentu `Energy`, která bude mít props `electricity` a `water`, ve kterých se bude předávat měsíční spotřeba naší domácnosti.

	![komponenta Energy](/ukazky/ukazka-energy.png)

	Tato komponenta data jen zobrazuje, na nic se zde nekliká. Jen hodnoty z props zobraz v HTML a komponentu naimportuj a použij v komponentě `Dashboard`.


## Odevzdání úkolu

1. Nezapomeň udělat `git commit` a potom `push` do GitHub repozitáře.

2. Odkaz na repozitář odevzdej jako řešení úkolu v [moje.czechitas.cz](https://moje.czechitas.cz).