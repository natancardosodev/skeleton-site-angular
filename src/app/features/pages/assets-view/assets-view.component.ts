import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { SolicitacaoService } from '@features/services/solicitacao.service';

@Component({
    selector: 'app-assets-view',
    templateUrl: './assets-view.component.html',
    styleUrls: ['./assets-view.component.scss']
})
export class AssetsViewComponent implements OnInit {
    public path: string;
    public formatFile: string;
    public urlAssets: string;
    public isImage: boolean;
    public base64: string;
    public breadcrumb: Array<any>;
    public isLoading: boolean;

    constructor(private activatedRoute: ActivatedRoute, private solicitacaoService: SolicitacaoService) {
        this.isLoading = true;
        this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
            this.path = params.get('path');
            this.formatFile = this.path.slice(-4);
            this.isImage = ['.jpg', 'jpeg', '.png', '.gif'].includes(this.formatFile);
            if (this.isImage) this.isLoading = false;
        });
    }

    public ngOnInit(): void {
        if (this.formatFile === '.pdf') {
            this.convertToBase64();
        }
        this.breadcrumb = [{ route: '', label: this.path.split('/').pop() }];
    }

    public downloadFile(): void {
        const link = document.createElement('a');
        link.innerHTML = 'baixar';
        link.download = this.path.split('/').pop();
        link.href = this.base64;
        link.click();
    }

    public asset(url: string): string {
        return `${this.urlAssets}${url}`;
    }

    private convertToBase64(): void {
        this.solicitacaoService.getFile(this.path).subscribe((blob: Blob | MediaSource) => {
            this.base64 = window.URL.createObjectURL(blob);
            if (this.base64) this.isLoading = false;
        });
    }
}
