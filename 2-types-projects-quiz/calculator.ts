/**
 * Let's make a calculator ð§®
 */
// ì ëì¨ íìì¼ë¡ ë°ë¡ íìì ìë¥¼ í´ì¤ë¤.
type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

// í¨ìì ì¸ìì ì§ì  ì ëì¨ì¼ë¡ ì ì¸í´ëëì§ë§ ê°ëì±ì´ ë¨ì´ì§ê¸° ëë¬¸ì ìì ë°ë¡ ì ì¸í¨
// í­ì ì¸ìì íìê³¼ í¨ìì ë¦¬í´íìë ê°ì´ ì ì¸í´ì¤ê²
function calculate(command: Command, num1: number, num2: number): number {
    switch (command) {
        case 'add':
            return num1 + num2;
        case 'substract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        case 'remainder':
            return num1 % num2;
        // defaultë ëª¨ë  ì¼ì´ì¤ì í´ë¹íì§ ìë ê²½ì° ì¤ííë ê²ì´ì§ë§
        // ì´ í¨ìììë ì¬ê¸°ì ì¤ë ìí©ì´ì¤ë©´ ìëê¸° ëë¬¸ì ìë¬ë¥¼ ë°ììì¼ì¼í¨
        default:
            // ì ë§ ì´ê² ìë¬ìí©ì´ë¼ë©´ íì¤íê² ìë¬ë¥¼ ë°ììì¼ì¤ì¼ 
            // ë¤ë¥¸ ê°ë°ììê² ì¤ìí ë¶ë¶ì ì ííê² ì¸ì§ ìì¼ì¤ ì ìë¤.
            throw new Error('unknown command');
    }
}


console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
