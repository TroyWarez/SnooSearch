echo packing extension
set devFolder=%cd%
cd ".."
set keyFolder=%cd%
cd "C:\Program Files (x86)\Microsoft\Edge\Application"
msedge.exe --pack-extension=%devFolder%\SnooSearch --pack-extension-key=%keyFolder%\SnooSearch.pem
cd "%devFolder%"
echo Done building Snoo Search at this time and date: %DATE:/=-%_%TIME::=-%!