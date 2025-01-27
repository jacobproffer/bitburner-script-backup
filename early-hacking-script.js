/** @param {NS} ns */
export async function main(ns) {
    // Define the target server
    var target = "joesguns";

    // Define how much money a server should have before we hack it
    // In this case, 75% of the server's max money
    var moneyTresh = ns.getServerMaxMoney(target) * 0.75;

    // Define maximum security level the target server can have
    var securityTresh = ns.getServerMinSecurityLevel(target) + 5;

    // Get root access to target server
    ns.nuke(target);

    // Infinite loop that hacks/grows/weakens the target server
    while (true) {
        if (ns.getServerSecurityLevel(target) > securityTresh) {
        await ns.weaken(target);
        } else if (ns.getServerMoneyAvailable(target) < moneyTresh) {
        await ns.grow(target);
        } else {
        await ns.hack(target);
        }
    }
}