/* Stockman 21 — pdf.js worker proxy
 * importScripts() inside a Worker CAN load cross-origin scripts (unlike new Worker(url)).
 * This tiny same-origin file lets pdf.js create a valid same-origin worker. */
importScripts('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js');
