import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {trigger,state,style,transition,animate} from '@angular/animations';

@Component({
  selector: 'app-catalogue3',
  templateUrl: './catalogue3.component.html',
  styleUrls: ['./catalogue3.component.scss'],
  animations:[
    trigger('animations', [
      state('infoPokemonDefault', style({
        transform:'translateX(600px)',
      })),

      state('infoPokemonShow', style({
        transform:'translateX(0px)'
      })),
      state('pokemonsDefault', style({})),

      state('pokemonsOcult', style({
        opacity:'0.1',
        cursor:'default'
      })),
      transition('infoPokemonDefault => infoPokemonShow', animate('500ms ease-in-out')),
      transition('infoPokemonShow => infoPokemonDefault', animate('500ms ease-in-out')),
      transition('pokemonsDefault => pokemonsOcult', animate('500ms ease-in-out')),
      transition('pokemonsOcult => pokemonsDefault', animate('500ms ease-in-out')),

    ])
  ]

})
export class Catalogue3Component implements OnInit {

  public infoPokemonDefault ='infoPokemonDefault';
  public pokemonsDefault='pokemonsDefault';

 
  public searchPokemon: any;
  public img1:any; 
  public img2:any; 
  public img3:any;
  public types:any;
  public move1:any;
  public move2:any;
  public power:any;
  public pp:any;
  public priority:any;
  public combo1:any;
  public combo2:any;
  public effect1:any
  public effect2:any;
  public accuracy:any;
  public name:any;
  public arrayPokemons: any = [];
  public showContent= false;


  constructor(public api:ApiService) { 
    setTimeout(()=> this.showContent = true,2000)
  }

  ngOnInit(): void {

    this.getAllInfo()
  }



  
  getAllInfo() {
    this.api.getResults3().subscribe((value: any) => {

      value.results.forEach((propiedad: any) => {
        this.api.getPokemon(propiedad.name).subscribe((value: any) => {


          this.arrayPokemons.push(value);

        })
      })
    })
  }



  InfoPokemon(name: any) {

    this.infoPokemonDefault = this.infoPokemonDefault==='infoPokemonDefault'?'infoPokemonShow':'infoPokemonDefault';
     this.pokemonsDefault= this.pokemonsDefault ==='pokemonsDefault'?'pokemonsOcult':'pokemonsDefault';

    this.api.getInfoPokemon(name).subscribe((value:any)=>{
      this.img1= value.sprites.front_default;  this.move1= value.moves[0].move.name;
      this.img2 = value.sprites.front_shiny;   this.move2 = value.moves[1].move.name;
      this.img3 = value.sprites.back_default;
      this.types = value.types[0].type.name;
      this.name=value.name;

      this.api.getInfo(value.moves[0].move.url).subscribe((v:any)=>{
  

         this.power = v.power;
         this.pp= v.pp;
         this.priority = v.priority;
         this.accuracy= v.past_values[0].accuracy;
         this.combo1='Ninguno';
        this.combo2= 'Ninguno';
        this.effect1 = v.effect_entries[0].effect;
        this.effect2 = v.effect_entries[0].short_effect;
        
        
      })
      
    })

  }

  CloseInfoPokemon(){
    this.infoPokemonDefault= this.infoPokemonDefault==='infoPokemonShow'?'infoPokemonDefault':'infoPokemonShow';
    this.pokemonsDefault= this.pokemonsDefault ==='pokemonsOcult'?'pokemonsDefault':'pokemonsOcult';

  }




}
