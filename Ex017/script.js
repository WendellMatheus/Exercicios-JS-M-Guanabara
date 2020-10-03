function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número, JOVEM PADAWAN!')
    } else {
        let n = Number(num.value)
        let ctd = 1
        tab.innerHTML = ''
        while (ctd <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${ctd} = ${n*ctd}`
            item.value = `tab${ctd}`
            tab.appendChild(item)
            ctd++
        }
    }
}