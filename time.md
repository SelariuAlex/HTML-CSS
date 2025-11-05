# Interviu fullstack React / Node

## Prezantari (10 min)
Ne prezentam noi si dupa se prezinta interviewee pe ce proiecte a lucrat cu de technologii de workflow a avut Jira/Git

## HTTP (5min)
### 1) HTTP Status Codes
100 : Informational, Switching protocol from http to websockets
200 : Success
300 : Redirection
400 : Client Error - Bad Request (did not send good information)
500 : Server Error

### 2) HTTP Request methods
GET : Retrieve resource from server
POST : Create new resource
PUT : Update / Replace existing resource
DELETE : Delete existing resource
PATCH : Edit just some items in a object for example

## HTML (5min - 10min)
### 1) Semantic HTML
header / footer / nav / main / aside / section / article

### 2) Form input types
text / email / password / radio / checkbox

### 3) Accessibility
Can you give me some examples ? (color contrast / alt text / form labels / headers order)
aria-label / alt / tabindex 
Did you work with screen readers ? (NVDA / MAC)

### 4) Async vs defer (load js scripts)
Normal: parsing HTML stop / download JS / Execute JS / Continue HTML
Async: parsing HTML and downloading JS at the same time / execute js / rest of the HTML
Defer: parsing HTML pana la final / download js in acelasi timp / execute js in ordine

## CSS (10min)
### 1) Box model
content / padding / border / margin

### 2) Position
static / relative / absolute / fixed / sticky

### 3) Display
block / inline / inline-block (width - height) / none (visibility: hidden / opacity: 0 (can be animated with transition))

### 4) pseudo-classes (:hover / focus / active / disabled)

### 5) pseudo-elements (::before / after / first-letter / first-line)

### 6) Specificity
inline style / id / class / attribute / pseudo-class / type / pseudo-elements

## JS (20min) (in progress)
### 1) copy objects
shallow copy : Object.assign / {...myObj} 
deep copy :  JSON.parse(JSON.stringify(myObj)) / structuredClone(myObj)

### 2) event loop

## React (10min)
### 1) useMemo (optimizari React)
ai o lista mare de obiecte si folosesti filter pe ele. Cum optimizezi codul ca sa nu recalculeze iar acel filter ?

### 2) .module.css 
cum eviti global css in React ?

### 3) useRef
Ai un chat si cand primesti raspunsul vrei sa iti scroleze jos la capatul raspunsului.

### 4) Props
Explicam putin despre props si daca poti si conceptul de lift state up. (form)

### 5) useCallback
daca parintele trimite o functie ca si prop cum faci sa previ re-renders al copilului daca ai acelasi prop

### 6) useEffect 
Cum faci clean up in useEffect ? gen window resize / websockets

