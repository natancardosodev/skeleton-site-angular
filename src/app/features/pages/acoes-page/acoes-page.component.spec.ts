import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesPageComponent } from './acoes-page.component';

describe('AcoesPageComponent', () => {
    let component: AcoesPageComponent;
    let fixture: ComponentFixture<AcoesPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AcoesPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AcoesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
