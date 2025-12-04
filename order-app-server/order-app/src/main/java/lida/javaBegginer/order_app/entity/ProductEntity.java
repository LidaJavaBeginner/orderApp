package lida.javaBegginer.order_app.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name = "product")
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private Double unitPrice;

    @Column
    private String description;

}
