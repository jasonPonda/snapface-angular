import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 350,
      imageUrl: '../../assets/carter-baran-75IgLbgqRls-unsplash.jpg',
      location: 'Kinshasa',
    },
    {
      id: 2,
      title: 'Reed',
      description: 'Mon meilleur Roc !',
      createdDate: new Date(),
      snaps: 30,
      imageUrl: '../../assets/reed.jpg',
      location: 'la montagne',
    },

    {
      id: 3,
      title: 'Marcos',
      description: 'Take it !',
      createdDate: new Date(),
      snaps: 100,
      imageUrl: '../../assets/marcos.jpg',
    },
    {
      id: 4,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: '../../assets/carter-baran-75IgLbgqRls-unsplash.jpg',
      location: 'Kinshasa',
    },
    {
      id: 5,
      title: 'Reed',
      description: 'Mon meilleur Roc !',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: '../../assets/reed.jpg',
      location: 'la montagne',
    },

    {
      id: 6,
      title: 'Marcos',
      description: 'Take it !',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: '../../assets/marcos.jpg',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
