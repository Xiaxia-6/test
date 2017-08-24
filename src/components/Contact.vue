<template>
  <div class="content">
    <div class="item">
      <h1>联系方式</h1>
      <ul>
        <li>
          <!-- Phone icon by Icons8 -->
          <img class="icon icons8-Phone" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADh0lEQVRoQ+2ZjZENQRDH/xcBGSCCIwJEgAiOCBABIkAEiOCIABEgAmRABNRPTat+/Wbn473d2a2jq67evtt5U/3b/pzeE10QObkgHPrnQO5KeiLpuqTPkh6kz80YtMUiryTdDxr/kHRD0retkJRALkt6n6zwU9JTSS8kvZV0R9IHSbe3DhIhbjlX4h6WuCTpcYJbnSdnEQ/xRRIQuJIXYuY8/X8TLpYD+ZTcaQrCgDblYhGEOCA7fU8w0RLeKt7FyGKv1/SvCPJV0tUUxARzTbyLXcu4YO33s92PIL/Szi1pOboYrnZvNs06N4oKk42upBpB4WsRLMhashggAA2XCGIB3OvzjyQ9T2kZFxsuEcQUepOp5jXlDnHL2p7N9yMIbkLAk616gpcWhlaGlE0/NlxyQU22upkaw9aUatmu1yVnA86B2NMl8Fv83WrPatbgaUylWctetSdMUcQafNJAttSe2azgN5oC8Vahl5qq8LjemaSPqSdbRMmWTUuFj9pwKulZauFz+wG4av0wpUogdL2cRxCskiuQlq57s1zLQ+5aU2tFOEg9TBDEQM7FLMsBOrWmS6lDFtdACGIUxcVeSsICUfwaYoYEMVxqIChEgeOMgkxlMdYATLysAtMCAoCPBdwnFy+rwrSCAGOplhozlZLtfGLrh7lZD4iPhVJgWw0aCtMDgmLAAMGZpRQLw2F6QSz4WwJ7KMwhID0wxAyWs2zGHCxXi2hzSCgkDGKQdV0nzUNBgPGVv+RmPpvF2GIPzjGcg6IAQrIoTXL+/uYYEDZpdR9ggKWwohhPn98CgjB+4jjAGu5xjRVZyzXFuCjHgvTAkChQlLmxCTNl2iCU9RLXEpNYZ3JoPgdID4wVV3v6fJZcx8dY0TpzgVjM4Ne1wK55SbzfZJ05QWI2m7sbjtbZaZXmBjEYLEPRxKcZ2rUO+2rW8tZhT1qlP7IECPv6dgbfpi60TmRqMNzfm6EtBWIwZCSKHcI1x+amulCgsU58Z06wJIjp4mvNsS9S/dloZ848AsTixgoi363I9ViH6s8BD7fdO62OAjFXA4AZAEIi4Dtz5pr414HZ0dNIEFPWtyse6N1E/LS801wsa9WeMPeJHSxCmkZwM9I27QjjV+LJN5XFd5prWCRCAsQfg/Mpqb2YXdUiUWmCmeqNFbimU6YrJknEpnIPeAsWaXHD6pr/INVHNHjBb61T3zPDQgmbAAAAAElFTkSuQmCC">
          <h4>电话</h4>
          <i>+86（10）57836300</i>
        </li>
        <li>
          <!-- Address icon by Icons8 -->
          <img class="icon icons8-Address" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADyElEQVRoQ+WZj5GMQRDF30WACBABIkAEiAARIAJEgAi4CBABIkAEiAARUL+r6auu2fnbM1elzlRtbe3u9/XXr/v1657ZI52TdXROcOgsgFyRdEfSXUkXJV1Pwfoi6Zekd5LeS/q+M4g7gdyS9FQS7yPro6TnknhfXruAvJD0OHnzO0WdyBN1MsEiM2SLTPG6kL5/KenJKpJVIFDnbcoCAHCKFxRqLe4DOC8AkZV7A/dVba4C+eBAQCmL/miAyRIgDMzt0Rvz61aAEPlHksgElOlloeYj2YGCgHnlKDqFKQqE6JMNQEQykTvpM3MjkNmw/BqlUJ1nU6GrX4wdVA+qTVMskhFo9G2AUrkc9+TWU+zqbJ+JAEFpkNtjSQ8qAbboln5uZfGNpPtJjqnB4RUBQmRvJrmkV+TL1w+AcI4FaD5T1FCn1AjpL8j5p4nGemI8AuRzam61ojSgNLk8qpbNmqMUPfaRcewPrwiQP8l67V77/VJBkq2+WkHs2S+C+6+B0PjgeSniRGuEWky/1EO+vCKiYsMrkhFztFawVuwAprhRNxZqZDXzTxS7jSYtGY3Kr903PapEMmIS2VMWMoNjSDULpeJza/9hisgkXJL2KtUiQODuz2RxugM3SO8VrVZ/W4FgjGixnS31iuECzS60HlMTgqbdSEYwSJd+neYhsrJjMb+RlYduGhi2GwXCA0yGawo07EQaR2xbMCW79pAVIEtjd4ZyeVuwAsQXZ2gzlMBY3+HjdJHvyAg2bOxujfQ9ijHtIukrNkLTr3fMZyVSK37kZ/INH9qtUMsArdTKcm3sohZ2/BZ1Jis2Iayewpxg2ZER7FgzgxqjfcX6xpamugsIYABxOZ3n9k5WjI4/UhPsCUL39x4Qi1rNkKeSH9+R41rh1gTCy3Dpec1st4D0DPOwfAI2OW6dTVmB53Jrk28r+tV+1QJiTs3sDXzhtw4fZgvc9kDVXtMCwqiOY7OjuqkRs5inGJQi6tic3W/Y6Qo26f4HqwbEnPnq/nHqFpy7wMZ8TzGjVGhMTzS+VgtCDcjqfsNTjC0xi3PdWUr54DVPOEtAdu0ALavemVlK1cahg+GyBMQ2TVEK+IebYPDd0lCYjNoJzsHmqwTEuBzaqWWFRHbtsAE5j/4ZZGarQc6BLB0AVNTA/z09Ixila6u0z4GM/GWw6szq/UUhyoGEz5VWvZu4v3iu5oFY00EiQwcAE86sXmoHH6fN2gPpjgGrT994/8H45IH0Jt2NfmwzdToRG5CRSXfb0zcbOtlK9PYjm595dubODZC/lMsAQqE70dIAAAAASUVORK5CYII=">
          <h4>地址</h4>
          <p>北京市朝阳区酒仙桥6号电子城国际电子总部B座<a href="http://ditu.amap.com/place/B0FFFXK24K"><!-- Address icon by Icons8 -->
            <img class="icon icons8-Address" width="16" height="16" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD2ElEQVR4Xu1a7ZUNQRC9GwEiYDMgAkSACJYIEAEiQASIYIkAESACRIAIONeZdlq96p6q6a7eeWem/uye97p7qm9V3fqYd4KNy8nG748dgN0DNo7AHgIbd4CdBEeHwDUAdwDcAsD/r08e+BnANwAfALyb/h/inKMAuAzgOYD7xlu9BvAYwE/j+sXLRgBwF8ArAATBI7z8AwBvPZu8a6MBoMV5+RYhCPSIEIkEgJY/V7T+Ml2I8c7Yp5ALyAuPAFxV9tyL8oQoAOjuXxW3Z1y/mDElQSBf5MJwOI3ghCgA6LJn4hI3MovPuTM94pNY9MZBonPn//s+AgCmN1o/F4vlpdKaJ9ALmC67SQQAUnHGfMr3SXHyw8Ppc4YL+eDZ9De/HC+bc8ISIKtgRQDAtMViJ4lUukSOXH9bgCDBZJHE/d0kAgDGbm5xGfu09s3CDT5O2SB9LbmAWYPndZMIAH4L7eQz5Pf5crL9FbF/7rwmMNYGwC8ldR4dAJK4ZFx7QoDF0fvMxN+nJqrJ6vnmCA+QNcDLqcLLM4BWIWokyKKJ2SJJ91ogAgBZ/2txTSYnw5PkLgEg+T1V0uAPERLd+4IIAJjXGQa8WJIliksgNX5oDoUIAKiUDAPGPbnAIzKddnd/KhMFgFYOSzKsgSHJj2u7l8GRALR6AZmfIISRXzo4ygN4vtbRWbxAK5VDrB/tATxf9gUkR16mJuwkGUJJutf/+cMjPYDP0biglhG0EVqY9Ud4gMYFpemONkUKYf5WD2CMcmSVu6knvXGtrA75maz6vGcyvNh6u6bIS0JAVmdeRdP6vE3WCHPJuVrVWT3HC0CPMXdSKO/tZdGz5PJpj6vq9AIg83OLotzLMRjlSetB2X5X1ekBQGN0L0Nb4lzjhxo+TXp5AJDKy/GVxYhao5TvY8PDC3nfCcoZgxlEDwC9WtPaUHTpGyBLC64ayApA79ZUmwq1Vnz0GncLbgVAkp/ZxQpxQTdnFkgK0/WZClteesgQNZGhBYAmkqkQQz7z7/HCY5GeFgB6kF8Jh1S19XrZ4SZDCwC9yE8DIf1owsv6JUDdZDgHQG/ys6TK1jUuMpwDoDf5tV7Ost9FhjUAFpGKRcPgNS69awBEkl8wBn9ft+cvYItpuwZAJPlFA2AmwxIAx0h+ElQTGZYAOEbykwCYyFADwEUi0b7ccL7pHhoAlp69Qa8L3XpAhhoAci5/oRp3fvjBzFADoPYTls76DD/u4BdrGgBsS5lH8956uKYBD+SvS9iB/jc2nyuFA/RY15E7AOuyx3htdg8Yj/m6nrh7wLrsMV6bzXvAH8+72EE2oFdVAAAAAElFTkSuQmCC">点击查看地图</a></p>
        </li>
        <li>
          <!-- Message icon by Icons8 -->
          <img class="icon icons8-Message" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACpUlEQVRoQ+2Z/zUDQRSFbyqgAzpABagAFaACVEAHqAAVoAJUgA7ogAo4X868nJfJTvZXdpPds/MXkZl537z77rxdI/VkjHrCoQFk1TI5ZGTISEMngLT+Glq71WV7CdLVwh8rymekNyA7kj5aFXb9zbYlvccZ+ZG03yEYIF4krccg/A7MhaT7+ofV6Aonkq4NIgZ5kHQctj9dYRgg7kKck5jjYj8PpHyPrAC0SgMAQBgo58buwSzX8sTAMAHJLXNQB0AcSvqVxIGb/OfaL4X0KmktFD8msCwYIChqYgJiLzKk3HuEiVBvhYnIrG17JoZHSZuSPoOs4hhyQZASp0FmgGnbnr29AkEmslRRCMRgKCocrS17jp2JmkhJuzCIFTkya8Oez4IbsS/2ai6VMpvSICwUO9qi7dnba9G7rBKIwSA1HG1R9jzPXvNsvzIICy/SnvPstVEQFsdF8HcGlljFnqcav9C04pJlRu2MoGcCsVHWnjkI7ohx91rjQCqD+M7TLinssYyjxfZKzdnlW9biK4HQOhO0WaP3d4LBOhl8fpvQR8peyYzdV0zlZ/q8vFEKhE2QAXJgWOcZb+JPGq0TzHP40kEAtDVS9hqvcZTT5xUG8f1OVtMWwxDoU7DnrNNkDbrYeUXtXfFLEjCpPq8QiD+def1OHDAZRF4ETJ/GYD6AZKlIJx33eakn11wQf8sWaRXytFz17772sh72kiDxBeUfYqoGU3ceyrBuAon556NMEH9BfQdptP0MkoImNqS5ET1SzIBw8lAz3gJEES3XPe0y81ELMLth0iTmrHe/+L/dFWU2afO7V5Iu/YYeBFtEixB3YeCIFD9d+NS73968Mu3NS+zegHShLpIx9uo/Vp3OhAXf1bqYOfwBZNX0OGRkyEhDJ/APnKrUD8SdnCUAAAAASUVORK5CYII=">
        <h4>邮箱</h4>
        <strong>kefu@b.360.cn</strong>
      </li>
        <li>
          <!-- Fax icon by Icons8 -->
          <img class="icon icons8-Fax" width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACY0lEQVRoQ+2Z4THFQBSFPxXQATqgAypAB1SACngVoAI6QAV0QAe8ClABc95kM5m8ZHNvJrsxmeyvTObu23vuOXte9u4GExkbE8HBDKSDyd/ETK8RkIqRyQEZulChQNkZyQ7kCjgFdjq0/Qk8AAvjHskK5BY4d25OAbmOzGmVgHOdenhUWl/AFrAPvHcstAe8AWJm978B8VbPEm+J6UNOlBHvopZ4S8wMBNa/SOQq3uo1xbe5XirXCmyWLjoEkJjrpQYSAC2GANLkel6Wrful/ruliw4BpCnpXEBUgNVaqYFYK+2Nq0p2BlKXTSoZWVlKyog1iSHisgI5AO6LrM+A1+LZ+74JeFYgH5UjQvWD0/t+dCDfwGaRxbICyvt+dCCSkA5kGjrAVaXleT86kCE2ddtvZN0jkwHidae2+NGl5XWntvjRgXjdqS1+dCCzaxlcYnatPl+/s2tZm4GpToh1ac+uVfs2G91+DebTO6R0rUC7p4nd9Clumd8725aJoR201B7R9YA6hZ5RvVboM9+zliV21aDTUDI6J2x3zBITOj/U70as8y1JeWLKfGItTR1JBUz3IHq2Dt166aOvKj/r3N5xMSBPwBGgZkE4xVkWErNqNDwDx5YJQ8TEgISEdCw9dCz2Auif3FsAxxLroTEguo7TVZzkdQmo6941LoCbQlZyFDliltHV9pc0HotMlORdJCtdqAawJ4CkmW10AVEiQWJ6lsy0X6R/VVusaR8pRnLSyCqpUCkLEMWKGQEIvammSsulxFpWJrxAFK/qh8qr+gL1U7AUmMq2J+qVtDKSTet9F/oDv+8L676pWQQAAAAASUVORK5CYII=">
        <h4>传真</h4>
        <span>+86（10）57836303</span>
      </li>
      </ul>

    </div>
  </div>
</template>

<script>

</script>

<style>
  .content{
    background: #f5f5f5;
    width: 100%;
    height: 300px;
    font-family: dosis, sans-serif;
    font-weight: 300;
  }
  .item h1{
    padding:.5em;
    text-align: left;
    font-size: 28px;
    height: 100%;
    border-left:2px rgb(33,171,56) solid;
  }

  .item ul{

  }

  .item ul li{
  margin-top: 38px;
       text-align: center;
       width: 23%;
       height: 120px;
       float: left;
    border-left:1px rgba(33,171,56,0.7) solid;
    padding: 5px;
     }
  .item ul li a{
    font-size: 8px;
    float: right;
    color: rgba(33,171,56,0.4)
  }
  .item ul h4{
    font-weight:bold;
    font-size: large;
  }

</style>
