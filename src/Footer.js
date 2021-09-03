import React from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                className="footer__albumLogo" 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIRERgRERIYERIRERgRERIREhERGBERGBgZGRgUGBgcIS4lHB4rHxgYJjgmLC8xNTU3GiQ7QDszPy42NTEBDAwMEA8QHhISGjQjJCs0NDQ2MTQ0NDQ0MTU3NDExNDc0NDQ0NDQxNDQ0NDQ0NDQ0NDE0NDE0NDQ0NDE0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIEBQMGB//EAD4QAAICAQMBBgMFBQcDBQAAAAECABEDBBIhMQUTIkFRYTJxkQZCgaGxFCQzwfAjNFJicoKSFVPhc3Si0fH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQQDAgX/xAAnEQEBAAIBAwMEAgMAAAAAAAAAAQIRAyExQQQScRMyUWGRsQUjgf/aAAwDAQACEQMRAD8A+eRyNSUiiKo4QCoVHCoCjqEIBUVSVQgRqFSUIEY44oBCEdQFUIRbh6j6iAQqOoVAVRVJRVAjUKkqhCIwkpGoCqKSiMBRRwgRIikqiqBGoSVQlHaFQqOpFKOOoQCEcICjhHAVQqOEBVCo4QFUi7ACz5Sco6rLuNDoP6uTK6Ijl1LGwOB7dfrM/I5J6k/Mmds7gCh1Mqxj+SpRERSU9vLvp9Uyee5fNT/L0mujhgGHIPSYMu9m5qbYejcr/q/r9JKsaUJKoqkUoqkoVAjCOooBIkSVQgRqRkzFUIjCEIChHCUdY4oSKccUcAhCOAo4QgEI6hUAhCOBx1D7V+fEzMrV9Je1R5+XEz845nPe8lvSKrNZuKNop1jwJKKOUBgrUfkbHsfWKEDd0+UOob6+x851mNoMxRwPusdp/kfrNqRYUUlFIpQjiMBQhCAoo4QIyMmYjCFUUlCBOAjjqFKOOoVAUcdQgEI46gKoVJRQFCVtZrFx8dX9PT5zGz6p8nxG/YcD6SDQ1OqS+Gv/AE8/n0lHJqAeg+pla4RMZC21Mt8ot0jCekS3mPcZGo6PvAN0N0W0wqNiQeXU7TcdQG/I/lM8wgbWLtJG4YFffqPylxWBFg2D0I5nmbljT6lkNg8eanof69YG/FFjcOoYdCL/APElUilEZKECBEUmRI1AUI4oEajjhA6QhCARwEcAhHCAo46hAJT1+q7taHxt09h6y5MDtNicjX0FAR36CozEmz1PWKEJUEBCdcaXA76PRnIaHSej0n2bXguR+My9KU2hTkGMjnnvDf8AwU/nLPd0Nw1LfMYMrD63/Kcct3zpoxkk3rb1mm+zGAra0fpLKfZrGPuj6TC7F7bC5FxnIHDGiybwNx4pgyqQePl7z24DbCaqhOOVyxuq0YzHKbjDz9haZRTFQfwmJr/s7hK7sbC/KiDz+E5ds9ojJkKbiiiwCi72Y35KWHHXzlPTnDjstkysT1WsaX/t3Nz+M9yXW9vOU8aee7Q0xxuVPFGpWM2+23x5drYg982HVV9+CGN+fpMZ0KmmBBHBBFEEcEfUGd8buMmeOqhCEtaPRtkPovm38h6menhpdlA92L/xGvl/+3LkFQKAo4AFD5R1IpQhCoCqIiOKBGFSRigRqElCBOEcICjgI4BHFAQHCEcAmf2loS/jQW3mPUe3vNCOB5RlI4IojrflBVs1PTZtKj/EoJ9eh+sfZPZaDOoBsOGxgOAQGYEKb+ZH1kyy1LVxm7JXnu4NAizzVDk36T3Z+yuc6PG+XEmHGqFwikjI+8KSXbzJCigb29PaXOwMGPPrQqYyuPDmTIu8KAFVAmNQB94lEaz1punn77Xur4gD8O0V9BU+X6r11wyxxk/da8eCS9XwXLiYsWLUbvcbJJIv+jJlbUU9EdS243+Rqb2o0qFytVtY7enw3x/9R4uzueAB70Jr+s748ErE02lKujXuJdR0IJsgVz+U+n/9FJ0ZSkOTuq4xoN2QLV7gLsm+feeR0mlVtQi3/Dbe3u33Qfx5/wBs+jaMHua9JMs7dPPsmNsj5HqlXezlSQWPHBFXQB/CVNRhGV9w3c0AtUF+XoPae07U7OC5XH3WO8H/AAlj09hd/wBESl+wbI+pY6/SxyjA1mjrGPUEH6Slr9JkfJ4QSK6ngdT1nptfitaqqrqOpJFCcNbj2vVVwCa568zpxZWsnqJOuv0xdP2Uq8udx9BwP/M0QABQFAdAOKjindkEUcKgKIiShAhUREmRFAhFJkSMBQjhA6VHUIQoqFQhCCoCOEAqEcIABHACOAp0wvsdX67GVwPXab/lIRyWbV6LK50WRWLju3dNQrdKVWYAH/ECpcexr5z0uTLenayCyErYnhc+tGTAuHIgdsYK43N8ITe0/Lmvn7T0GHVFNIgci2Cktzz4QAfoKPobnxPV8NmrZ13r5b8OSZPOs5TIT6n5fOaukyFxwo/4qP0E45cStz1Jojn5frxB9eumTcwsn4QPP+qmvDVke5n7Yp6jtvHpMjo2IsxIO4UKFcV7Xc2tD9tcAxXsN9anndbqk1BAdkxg9RRdyPw6cepE56LsfCrh11CUDyhR9w/DkH5+/SaNY66uW8renWPU6HtNdcSyY2Q4urNQ3BvKotU7KK6H2JH5Tjo+1GwJZVMqrQdsJIK3xZUgEeXlOuTVY8yb0+Ek3fBBHUGcrOrrM9TTFzk95jUmt2SyetbQWuvPkCVdc4bIxHIB2r8hxJ6nVHvtyGiikdAaJr85WJ8z5zTx466sfLlvojUUlImdXARRxQCFQhACJGpKECMUZigKEcIE4RxwpQjhCCFQEcKIQjhBCOEBRwhAJ6vsVt+jo/cd08uKG/8ARz9J5Sej+zPjxZsZ8mRxf+4H9BMPr8d8W/xZXbgustKuofY/gUEHrx60R/XtKb6ZdQzb2K0Nq0QOJp65u6ansg/DtUt4T8j+FfLiZOXUquTcpta54ABP9VOHp7vX9tOWmenZ+nxPWUMV8yWZSPxE1HXskg92chYjwg5vP3o3NNF02RRvAb19B7fOT0Wl0W6+7UcCiPWzZv6TX7re+yanaRk6DsNGY5FyOtA8BrsehJElqHGJHRTduWYj5AfqJu63UYES0cBelL5TxOq1u/diTxO70D6C+sY7y7pnljOzpj5tvJjx+HH63Okk2MIAg6KoUe9cE/UH6SM0Y9mPLvShHCenlGojJRGBGEZigEIQgKKSIiMCMIQgdI5G5IQpwihCHCKOARwjgEKhCFEIRwgmt9m8u3Kyf9zE6gerDxD8lP1mTLXZmXZnRj0GRb/0k0fyJnHnx93HZ+nvC6ylbmnK6rTOp/iYiRYPIPldTxWpyBHKOfEOAWskmzz7dB9Z7v7O4lx6nU49tMSDXkxJPP6cT5v2zqWyah3I2kOVAHltNfXiYPRz/ZljO3S/y0c3TGXygdfkQ1uJAPHv7zr/ANYyWa4sUPajd/p9Jnl4hZn0/bPwze6/ldbX5HG0E8mafZWkN+CnynhFJ272ABKKaIDbTfMz9HjVaZwe7sLkZOWUHoRxQ9OfOb2nxKmAHKHfCwVC6d4XxMbfG46AWX20enirdul9uz3a+XR0DY1dehTdvNAN0NHk+LxE81Y20DRMrTW3bRj3nxMAqkbtmSlIKMWAAZdzOCTZGQir4mdmx0zAEEK1WDXvVEkgjoRZogjylRzijihBUVRwMCJikjFAiYRxQCEIQFUI4QCOKOFEcUcBxxCOARwhAI4o4BCEIBCEarfA6ngfMyXsi3272k+DWLqMZ8LomUqPvKwBIMxvtRpkTVOENq5GVa/zjcR9Sfymr9pXRiEJG/A7Ytu5WPdGmRuKAr4dvkRXoTkZtKwCtkYOysMbYju3IgHBcjnoDwDYFE1MnDjrVnTx8/hp5MujGZfx5r6zsuM7d1Ky1tYE0UJJAY+nPnLmPRbmAUkNe3LiYKNpArdXNrdA+fUy0uFCylW2urBcqbkYEIOXq9rdBxySOefPZIzWnpwyI74yrBAyZsbm6x/AGZeBdUPfqB1vbRSEY6YgMmNkz4XDZBl07KAuQfdZtrUv3mX3Wpmrp1DoLK58LLuAyNtyY1G4OrUAOg2119j8N50RsiYcgK6jC6MmYd4qNpwdxyG/hA6jb0IbmuZUdtRqAq1jYbQwbLgJZnCIwfHnxuSVZioTnmxtuy3MlexuUlDwWZt+RvLqBlXooK1zZPkblfO5GLegcszcZMoIIwIShO5jYLs5oBeAaHIEHdu8Lrsx4wwxkoMmTa6qCio3NuQASV8+tgGFLPp7J201clw2OmJ5NIHZupAvp19JVdCpo8H+h/KaQbexZtzNsHx5Gdhvt+B4l5PIbkHbwauRzY1PBtQAKD2pXyPRR79ByeKkVmQnfNpivTxLdArZ8r61zx1rpOEIIjHFAVRGSiMCMIzFAIQhAcIQhThCOARxRwCOKOARxRwgjihCiXtHg2KdTkFYsH9oR0OQryEHpZAF+8NDpdzAEAs4tFboq8DvHHXbbCvX1Alv7RU6Y9KrbRmzeMoEN4ksu4rryOnAND2mPl5t5zjx897+vL3Mem68xpdfkfMuUuA+Zmd2+EqRzQqgBt8hV+vInRcKvk2848yA43IDkMDtRHWx/mJo14aA8pWz9nZCWbGhoZaRFLOoqidjFRfJUAjqPUAmaKOWP7xZXYmM5ACSqOC6Frb4tzDxfdYV89cknZ4u/KKY9+TblxnT5FC48hXYocsaRhZAAFADqGANy6mRnyfvaqGVAj5UcAZsWQ7Q7MqkhaHhYVt4HN1IY12K37RWXED3DZVGMXhPhQoaI2Blb1KkceogMeVlOPFkL43yPj71uHyIwRVVbPhDAt5hSEYjpPSLbHJkyJhfu83xJjz7id6PRLOKO4UoHQAFhXPETDFjTLnUd4UdceEZWDl8lg7fEwY7CFNgeLaeoJqwmO8lqTiCadsm5BjHdafkI6L6KSzAKNzEG6pSYeFcWLu1CnUZXOIAePHhVlvJe62JVQh5FEsRRjYCdz4tOm/YuMPkIXKr5M1BQQCSSwV9oulJY+nHTS4SVYJj3ZMH9mmJGZwMi1aBq2hNtbyK3cDzO62EVXZVHiRC2TY7qw3+EYA4HgZQ3APT4jdnZ3y6nFiP7KvhREU6l0RyoZmo4URQ1OdwWuleHryOXvtuo9aZuswL4GLrvybwhTblfM7rQdS42hBwoY0SeSTZMFZTuUFX7u0fnLkLMF8u6xgMDYFWPEPLijvG2hji25MjqgRwEGPGbxszknbkdkCjbwFHlR2mLue+x4m34kcEqch2O+YAjc48YQElfCL6LxfE6R5TbEpBKswIVSUOPODtskcMS5ugBurkXY5lTNpwwLpzyeRZB4vrzXnZNdPxksefI2NsjLjV0xNk2s2R2KBXdn6rs3FSPUsfQGu7pkxkDUEMWRMu9C5R0a9rA0HDKVYnkil5FXVGRAy9rcFDeFYDqpYfGnkwI68Vfp0IUgiUZFKIyUUIiYjJGIwFCFQgMQhHCiEUcBwijhDhCEKYjijgEsaTB3h5B2LW7bQ5PCrZIAJPFk+p8pXm9ph3GLGKvJlPeMAwU7NpJ5IrdW1QPu+MmrnDn5LjOne9lxx3XTS6Zse4Anv84p28XBYbUVK6bVseoAuqBlLtXOMTOeC2PTrj06kk791Fjto71Nqp6cY/ebfZWkZVOXKRvdmyGlAKWDxXXwqABwKBrz4852/qR3mcjwnFgRdtoKyOW4u7ag4KkWAVuh0mL019/NfOo7Z9MXPCmR2x7SykYXCjarlsmzc+RvDyVZ1HRjwfMyjoGCJkUYzmwo7WlM27TsQBkQ9AbTk9RuB8jLW5myocYCgabu1XJjX4zjDtk2jhQRkUFj+IPSUk07Y2x9yzLvbIilNxZ8amm8gBu8NUeN5+c+ppnX+w2BLLjRso7kqmNQKzu3Kq3XgMdrMCLAHQihez5FXuUtcmR2Zs742x7caO43OTVCyWA3igoautmS4xpNMV5VU04OdwnLO7VsDfdBG9Aw5DOxJ85Xwtty40OPvBixd7kVRhN5SrlMBBJWhvehd+M9Zzxvutvhb0mknD/vOVy2PG5U5cYVKRX8S4Ca4Z1YLwFFtZPkeu0adcVBVd2RX2oV2oNzFfCxYtuL0Q10jg8ETnoNCHTbncOm59XlICW6ICd6k8sAe8AU8eO6456PkOXPh2DeiJ3mbu2aldrIRWoc0K2/5z7mLlu6/kk8u2jZUR8uRgcj/vWUgKwW/4SDcw3Bm+EC7FXe4Sti1QKodrFcgbLmVAz91j2gpgRX43sFIsGyG5FtxUzuG7xwVyZHzrhxvtKFsxUoGBYUFFuAoqgqXwJ0fPZznE67sTJhws1b2ZnCF0IarKgp6bca9BxPWOGuvmlqymqffqUygpl/Z8gwJjDN3eMr3mxQCVHHis80B06Q1GN0xd5kdi+mdMW8lKDvlxlqHxAhd/io9QeCI8+XYMWoycjJmTE5oY0KJjdXVQlOqBlSgR93ryZ17p8mbNjUscepzrsBQh32bMgLM/iKbWBrdbcV5zog1uUHJlTGyPizaNcQZsh2ozK7Ip2gb2DbhVX5mvFJDAExuyANk06nDjd3ZidqNlS3sAJe4AA8WBzYI5ZdVeEtjYd7h13dolqjFEbKEVFUblI3Eny5J4MTpvzu97V1GUuoXIXRHxpjcHkgO+52FEUCGq+JAJ423JjONMlOg8QO97L3RIFbHKuwPhqugIyXAIDgUuRQ6XxaG6NeQ4/IzSXUWKxLbZNLg1OIp3VplxkL4/PaUx9BVgVQM4HQrwoYBjkpAGCqFyu+xAjHwJvrpz4r8wJBRMUYNgEdGAYe4IsQgKKOKFRhHCAQhCARwhAI4QgEcIQHGIQgI9Pwno+1jer2nkbMfB5H8f0hCY/Ud58V0w7X/j0XVwp5FLweRyfSfOtVzq8pPJrDyeT0w+cITJ/jfvy+Hvn7Rx0WdxtIZge51PIYg/wA3X/Vz85Z+yJvJjvnap23zXifp6QhPq8n2X4Z53jT7ZUHT6liAT+248dkWe7FeC/wDD7Q1mNVbLtAXbpHZdoA2t6j0PA+kITzx/a9Xu1v8AuDy/ZcYryqsXH/yb/kfWUNHyy3zTtXttx+H6eXpCE48Xe/Mer4eV7ON5MWM8oc5JQ8qTS810l/7Pf3lf/QxD8P7HiEJrrm3FQDT46AG/tR9/A8dJk+L1nfTIGy4FYBgNWKDAEDgeX+1foPSOEDhg/vep/wDdL+WqSLCaw9nsODvdbHB28eG/T2hCBndlCsGAjglxZHBP97P6gH8JWz5GOneyT+7nqSfh1eTb9PL0hCBb7bUDIaAHHkK+8ZnwhIFFCEBQhCEf/9k=" />
                <div className="footer__songInfo">
                    <h4>Dalida</h4>
                    <p>Soolking</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipPreviousIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer 
