import { HttpErrorResponse, JsonpClientBackend } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerErrorService } from '@app/core/server-error.service';
import { ApiService } from '@app/services/api.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerService } from '@paella-front/ngx-spinner';
import { of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { environment } from 'src/environments';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit, AfterViewInit {

  private interval;
  private interval2;
  public monitor;
  public relacionados;
  private id;
  public avatar;
  private foto;
  public oculto = false;
  private estilos = {
    header: [
      'background-color:aliceblue; color:#000000'
    ],
    cuerpo: [
      'background-color:#f5f5f5;'
    ],
    tarjeta: [
      'height: 90vh;margin-top: 5vh;width: 57vw;right: 7px;min-width: 291.5px;'
    ],
    texto: [
      'background-color:#182C6B; color:#E4E4E5'
    ]
  };



  constructor(
    private $api: ApiService,
    private route: ActivatedRoute,
    private $spinner: SpinnerService,
    private router: Router,
    private $serverError: ServerErrorService,
    config: NgbCarouselConfig,
  ) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
    config.showNavigationArrows = false;
  }

  ngOnInit() {
    this.$spinner.show();
    this.$api.setLoc();
    this.getId();
    this.getDatos();
    this.actualizarDatos();
    this.intervalo1();
  }

  ngAfterViewInit() {
    this.$spinner.show();
  }

  private getId() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  private asignarEstilos(qr, estilo) {

    if (estilo === null) {
      estilo = this.estilos;
    } else {
      estilo = JSON.parse(estilo);
    }

    this.animacion();

    /** Headers de todas las tarjetas */
    const header = document.createElement('style');
    let pagina = document.getElementsByClassName(`header${qr}`);
    this.recorrerPaginas(pagina, header, `.header${qr}`, estilo.header[0]);

    /** Cuerpo de la tarjeta */
    const cuerpo = document.createElement('style');
    pagina = document.getElementsByClassName(`cuerpo${qr}`);
    this.recorrerPaginas(pagina, cuerpo, `.cuerpo${qr}`, estilo.cuerpo[0]);

    /** Texto de la tarjeta */
    const texto = document.createElement('style');
    pagina = document.getElementsByClassName(`texto${qr}`);
    this.recorrerPaginas(pagina, texto, `.texto${qr}`, estilo.texto[0]);

    setTimeout(() => {
      this.$spinner.hide();
    }, 10);

  }

  private recorrerPaginas(pagina, elemento, clase, estilo) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < pagina.length; i++) {
      if (pagina[i].childNodes[1] !== undefined) {
        if (pagina[i].childNodes[1].toString() === elemento.toString()) {
          pagina[i].childNodes[1].remove();
        }
      }
      pagina[i].appendChild(elemento);
      elemento.sheet.addRule(clase, estilo);
    }
  }

  private getDatos() {
    this.$api.getMonitor(this.id).pipe(
      tap((data: any) => {
        this.monitor = data[data.length - 1].local;
        this.relacionados = data;
        this.relacionados.splice(this.relacionados.length - 1, 1);
        this.setFoto();
        this.setFotos();
        setTimeout(() => {
          if (this.monitor.monitorStyle === null) {
            this.asignarEstilos(this.monitor.qr, null);
          } else {
            this.asignarEstilos(this.monitor.qr, this.monitor.monitorStyle.toString());
          }
          this.relacionados.forEach((el: any) => {
            this.asignarEstilos(el.idRelatedLocal.qr, el.idRelatedLocal.monitorStyle);
          });
        }, 10);
      }),
      this.$serverError.catchErrorAndOpenModal(),
      finalize(() => {
        setTimeout(() => {
          if (this.relacionados.length === 0) {
            this.oculto = true;
            document.getElementById('monitor').classList.remove('tarjeta');
            document.getElementById('monitor').classList.add('monitor');
          }
          this.$spinner.hide();
        }, 100);
      })
    ).subscribe();
  }

  private setFoto() {
    if (this.monitor.files.length !== 0) {
      this.monitor.imgs = [];
      this.monitor.files.forEach((el: any) => {
        this.foto = el;
        this.monitor.imgs.push({
          url: `${environment.domain}img` + this.foto.path,
          id: this.foto.idFile
        });
      });
    } else {
      this.monitor.imgs = [];
    }
  }

  private setFotos() {
    this.relacionados.forEach((r: any) => {
      if (r.idRelatedLocal.files.length !== 0) {
        r.imgs = [];
        r.idRelatedLocal.files.forEach((f: any) => {
          this.foto = f;
          r.imgs.push({
            url: `${environment.domain}img` + this.foto.path,
            id: this.foto.idFile
          });
        });
      }
    });
  }

  private animacion() {
    if (this.relacionados !== undefined) {
      if (this.relacionados.length === 1) {
        document.getElementsByClassName('lista')[0].classList.add('animated');
        this.estilos.tarjeta[0] = 'height: 90vh; margin-top: 5vh; width: 56vw; right: 12px; min-width: 291.5px;';
      } else if (this.relacionados.length === 0) {
        this.estilos.tarjeta[0] = 'height: 90vh; margin-top: 5vh; width: 98vw; right: 12px; min-width: 291.5px;';
      } else {
        document.getElementsByClassName('lista')[0].classList.remove('animated');
        this.estilos.tarjeta[0] = 'height: 90vh; margin-top: 5vh; width: 56vw; right: 12px; min-width: 291.5px;';
      }
    }

  }

  public ocultar() {
    this.oculto = true;
    document.getElementById('monitor').classList.remove('tarjeta');
    document.getElementById('monitor').classList.add('monitor');
    document.getElementById('info').classList.add('turnoGrande');
    if (this.relacionados.length !== 0) {
      document.getElementById('tarjetas').classList.remove('tarjetas');
      document.getElementById('tarjetas').classList.add('desaparecer');
    }
  }

  public mostrar() {
    this.oculto = false;
    document.getElementById('monitor').classList.remove('monitor');
    document.getElementById('monitor').classList.add('tarjeta');
    if (this.relacionados.length !== 0) {
      document.getElementById('tarjetas').classList.remove('desaparecer');
      document.getElementById('tarjetas').classList.add('tarjetas');
    }

    document.getElementById('info').classList.remove('turnoGrande');
  }

  private actualizarDatos() {
    const intervalo = setInterval(() => {
      if (location.href.toString() === `https://tuturno.hipermercode.eu/dashboard/local/${this.id}`) {
        clearInterval(intervalo);
        return;
      } else {
        this.$api.getMonitor(this.id).pipe(
          tap((data: any) => {
            // tslint:disable-next-line: prefer-const
            let mon = this.monitor;
            // delete mon.imgs;
            const nuevDat = data[data.length - 1].local;
            // console.log(mon);
            if (mon.curTurn !== nuevDat.curTurn) {
              this.monitor.curTurn = nuevDat.curTurn;
              if (!this.oculto) {
                document.getElementById('carrusel').classList.add('desaparecer');
                document.getElementById('info').classList.add('centrar');
                const audio = new Audio();
                audio.src = 'assets/sounds/campanas.mp3';
                audio.load();
                audio.play();
                setTimeout(() => {
                  document.getElementById('carrusel').classList.remove('desaparecer');
                  document.getElementById('info').classList.remove('centrar');
                }, 3000);
              } else {
                document.getElementById('carrusel').classList.add('desaparecer');
                document.getElementById('info').classList.add('centrarGrande');
                const audio = new Audio();
                audio.src = 'assets/sounds/campanas.mp3';
                audio.load();
                audio.play();
                setTimeout(() => {
                  document.getElementById('carrusel').classList.remove('desaparecer');
                  document.getElementById('info').classList.remove('centrarGrande');
                }, 3000);
              }
            }

            if (JSON.stringify(mon.files) !== JSON.stringify(nuevDat.files)) {
              this.monitor.files = nuevDat.files;
              this.setFoto();
            }

            if (mon.monitorStyle !== nuevDat.monitorStyle) {
              this.monitor.monitorStyle = nuevDat.monitorStyle;
              setTimeout(() => {
                if (this.monitor.monitorStyle === null) {
                  this.asignarEstilos(this.monitor.qr, null);
                } else {
                  this.asignarEstilos(this.monitor.qr, this.monitor.monitorStyle.toString());
                }
              }, 10);
            }

            if (mon.name !== nuevDat.name) {
              this.monitor.name = nuevDat.name;
            }

            if (data.length <= 1) {
              if (!this.oculto) {
                this.ocultar();
              }
            } else if (data.length > 1) {
              if (this.oculto) {
                this.mostrar();
              }
            }

            if (!this.oculto) {
              const nuevRel = data;
              nuevRel.splice(data.length - 1, 1);
              if (this.relacionados.length === 0) {
                if (data.length > 1) {
                  this.relacionados = data;
                  this.relacionados.splice(this.relacionados.length - 1);
                  setTimeout(() => {
                    this.relacionados.forEach((el: any) => {
                      this.asignarEstilos(el.idRelatedLocal.qr, el.idRelatedLocal.monitorStyle);
                    });
                  }, 10);
                  this.setFotos();
                } else {
                  this.relacionados = [];
                }
              } else {
                if (this.relacionados.length !== (data.length - 1)) {
                  this.relacionados.forEach((r, ind) => {
                    if (r.id !== nuevRel[ind].id) {
                      r = nuevRel[ind];
                      this.setFotos();
                      this.asignarEstilos(r.idRelatedLocal.qr, r.idRelatedLocal.monitorStyle);
                    } else {
                      if (r.idRelatedLocal.curTurn !== nuevRel[ind].idRelatedLocal.curTurn) {
                        r.idRelatedLocal.curTurn = nuevRel[ind].idRelatedLocal.curTurn;
                        document.getElementsByClassName('tarjetita')[ind].classList.add('desaparecer');
                        document.getElementsByClassName('infoTarj')[ind].classList.add('centrarPequeño');
                        document.getElementsByClassName('posNum')[ind].classList.add('centrarPosicion');
                        const audio = new Audio();
                        audio.src = 'assets/sounds/campana.mp3';
                        audio.load();
                        audio.play();
                        setTimeout(() => {
                          document.getElementsByClassName('tarjetita')[ind].classList.remove('desaparecer');
                          document.getElementsByClassName('infoTarj')[ind].classList.remove('centrarPequeño');
                          document.getElementsByClassName('posNum')[ind].classList.remove('centrarPosicion');
                        }, 3000);
                      }
                      if (r.idRelatedLocal.name !== nuevRel[ind].idRelatedLocal.name) {
                        r.idRelatedLocal.name = nuevRel[ind].idRelatedLocal.name;
                      }
                      if (JSON.stringify(r.idRelatedLocal.files) !== JSON.stringify(nuevRel[ind].idRelatedLocal.files)) {
                        r.idRelatedLocal.files = nuevRel.idRelatedLocal.files;
                        this.setFotos();
                      }
                      if (r.idRelatedLocal.monitorStyle !== nuevRel[ind].idRelatedLocal.monitorStyle) {
                        r.idRelatedLocal.monitorStyle = nuevRel[ind].idRelatedLocal.monitorStyle;
                        this.asignarEstilos(r.idRelatedLocal.qr, r.idRelatedLocal.monitorStyle);
                      }
                    }
                  });
                } else {
                  this.relacionados = nuevRel;
                  setTimeout(() => {
                    this.relacionados.forEach((el: any) => {
                      this.asignarEstilos(el.idRelatedLocal.qr, el.idRelatedLocal.monitorStyle);
                    });
                  }, 10);
                  this.setFotos();
                }
              }
            } else {
              if (data.length > 1) {
                this.relacionados = data;
                this.relacionados.splice(this.relacionados.length - 1);
                setTimeout(() => {
                  this.relacionados.forEach((el: any) => {
                    this.asignarEstilos(el.idRelatedLocal.qr, el.idRelatedLocal.monitorStyle);
                  });
                }, 10);
                this.setFotos();
              } else if (data.length < 2) {
                this.relacionados = [];
              }
            }
            // if (JSON.stringify(mon) !== JSON.stringify(nuevDat)) {
            //   // if (this.monitor.curTurn !== nuevDat.curTurn) {
            //   //    añadir animacion
            //   // }
            //   this.monitor = nuevDat;
            //   if (this.monitor.monitorStyle === null) {
            //     this.asignarEstilos(this.monitor.qr, null);
            //   } else {
            //     this.asignarEstilos(this.monitor.qr, this.monitor.monitorStyle.toString());
            //   }
            // }

            // if (!this.oculto) {
            //   if (this.relacionados.length === 0) {
            //     if (data.length > 1) {
            //       this.relacionados = data;
            //       this.relacionados.splice(this.relacionados.length - 1);
            //       setTimeout(() => {
            //         this.relacionados.forEach((el: any) => {
            //           this.asignarEstilos(el.idRelatedLocal.qr, el.idRelatedLocal.monitorStyle);
            //         });
            //       }, 10);
            //       this.setFotos();
            //     } else if (data.length < 2) {
            //       this.relacionados = [];
            //     }
            //   } else {
            //     if (this.relacionados.length !== (data.length - 1)) {
            //       this.relacionados = data;
            //       this.relacionados.splice(this.relacionados.length - 1);
            //       setTimeout(() => {
            //         this.relacionados.forEach((el: any) => {
            //           this.asignarEstilos(el.idRelatedLocal.qr, el.idRelatedLocal.monitorStyle);
            //         });
            //       }, 10);
            //       this.setFotos();
            //     } else {
            //       this.relacionados.forEach((rel: any, ind: any) => {
            //         if (JSON.stringify(rel.idRelatedLocal) !== JSON.stringify(data[ind].idRelatedLocal)) {
            //           if (rel.idRelatedLocal.curTurn !== data[ind].idRelatedLocal.curTurn) {
            //             document.getElementsByClassName('tarjetita')[ind].classList.add('desaparecer');
            //             document.getElementsByClassName('infoTarj')[ind].classList.add('centrarPequeño');
            //             document.getElementsByClassName('posNum')[ind].classList.add('centrarPosicion');
            //             const audio = new Audio();
            //             audio.src = 'assets/sounds/campana.mp3';
            //             audio.load();
            //             audio.play();
            //             setTimeout(() => {
            //               document.getElementsByClassName('tarjetita')[ind].classList.remove('desaparecer');
            //               document.getElementsByClassName('infoTarj')[ind].classList.remove('centrarPequeño');
            //               document.getElementsByClassName('posNum')[ind].classList.remove('centrarPosicion');
            //             }, 3000);
            //           }
            //           this.relacionados[ind].idRelatedLocal = data[ind].idRelatedLocal;
            //           setTimeout(() => {
            //             this.relacionados.forEach((el: any) => {
            //               this.asignarEstilos(el.idRelatedLocal.qr, el.idRelatedLocal.monitorStyle);
            //             });
            //           }, 10);
            //           this.setFotos();
            //         }
            //       });
            //     }

            //   }
            // } else {
            //   if (data.length > 1) {
            //     this.relacionados = data;
            //     this.relacionados.splice(this.relacionados.length - 1);
            //     setTimeout(() => {
            //       this.relacionados.forEach((el: any) => {
            //         this.asignarEstilos(el.idRelatedLocal.qr, el.idRelatedLocal.monitorStyle);
            //       });
            //     }, 10);
            //     this.setFotos();
            //   } else if (data.length < 2) {
            //     this.relacionados = [];
            //   }

            // }
          }),
          this.$serverError.catchErrorAndOpenModal(),
          finalize(() => this.setFoto())
        ).subscribe();
      }
    }, 15000);
  }

  intervalo1(): void {
    let i = 1;
    this.interval = setInterval(() => {
      window.scrollBy({
        top: 3,
        behavior: 'smooth'
      });
      // console.log(window.scrollY);
      if (window.scrollY === i) {
        clearInterval(this.interval);
        this.intervalo2();
      } else {
        i = window.scrollY;
      }
      if (location.href.toString() === `https://tuturno.hipermercode.eu/dashboard/local/${this.id}`) {
        clearInterval(this.interval);
        return;
      }

    }, 200);
  }

  intervalo2(): void {
    let i = 0;
    this.interval2 = setInterval(() => {
      window.scrollBy({
        top: -3,
        behavior: 'smooth'
      });
      if (window.scrollY === 0) {
        clearInterval(this.interval2);
        this.intervalo1();
      } else {
        i = window.scrollY;
      }
      if (location.href.toString() === `https://tuturno.hipermercode.eu/dashboard/local/${this.id}`) {
        clearInterval(this.interval2);
        return;
      }
    }, 200);
  }

}
