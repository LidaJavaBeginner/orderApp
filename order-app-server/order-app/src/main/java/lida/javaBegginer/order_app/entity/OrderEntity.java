package lida.javaBegginer.order_app.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity(name = "orders")
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long orderNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerEntity customer;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private ProductEntity product;

    @Column(nullable = false)
    private int productCount;

    @Column
    private Double totalPrice;

    @Column
    private Double totalVat;

    @Column
    private Double totalVatPrice;

    @Column
    private String note;


    @PrePersist
    public void generateOrderNumber() {
            if (orderNumber == null) {
                String yearMonth = java.time.LocalDate.now()
                        .format(java.time.format.DateTimeFormatter.ofPattern("yyyyMM"));

                int random = (int) (Math.random() * 10000);
                String randomPart = String.format("%04d", random);

                orderNumber = Long.parseLong(yearMonth + randomPart);
            }
            calculateTotals();
        }

    @PreUpdate
    public void calculateTotals() {
        if (product != null) {
            totalPrice = product.getUnitPrice() * productCount;
            totalVat = totalPrice * 0.21;
            totalVatPrice = totalPrice + totalVat;
        }
    }
}
